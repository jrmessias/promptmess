// Recebe eventos do Stripe e sincroniza o estado de assinatura em profiles.
import Stripe from 'https://esm.sh/stripe@17?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  httpClient: Stripe.createFetchHttpClient(),
})
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

// Status que liberam o premium.
const ACTIVE = new Set(['active', 'trialing'])

function toIso(unixSeconds?: number | null) {
  return unixSeconds ? new Date(unixSeconds * 1000).toISOString() : null
}

// Deriva o plano ('monthly'/'annual') pelo intervalo do preço da assinatura.
function planFromSubscription(sub: Stripe.Subscription) {
  const interval = sub.items?.data?.[0]?.price?.recurring?.interval
  if (interval === 'year') return 'annual'
  if (interval === 'month') return 'monthly'
  return null
}

// Sincroniza is_premium, status, plano e datas a partir da assinatura.
async function applySubscription(sub: Stripe.Subscription) {
  const update = {
    is_premium: ACTIVE.has(sub.status),
    subscription_status: sub.status,
    stripe_subscription_id: sub.id,
    plan: planFromSubscription(sub),
    subscription_started_at: toIso(sub.start_date),
    subscription_ends_at: toIso(sub.current_period_end),
  }
  await supabase.from('profiles').update(update).eq('stripe_customer_id', String(sub.customer))
}

// Atualização simples de status (sem objeto de assinatura à mão).
async function setStatusByCustomer(customerId: string, isPremium: boolean, status: string) {
  await supabase
    .from('profiles')
    .update({ is_premium: isPremium, subscription_status: status })
    .eq('stripe_customer_id', customerId)
}

Deno.serve(async (req) => {
  const sig = req.headers.get('stripe-signature')
  if (!sig) return new Response('Assinatura ausente', { status: 400 })

  const body = await req.text()
  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret)
  } catch (err) {
    return new Response(`Assinatura inválida: ${(err as Error).message}`, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const s = event.data.object as Stripe.Checkout.Session
        if (s.subscription) {
          // Busca a assinatura completa para gravar plano e datas.
          const sub = await stripe.subscriptions.retrieve(String(s.subscription))
          await applySubscription(sub)
        }
        break
      }
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        await applySubscription(sub)
        break
      }
      case 'invoice.payment_failed': {
        const inv = event.data.object as Stripe.Invoice
        if (inv.customer) {
          await setStatusByCustomer(String(inv.customer), false, 'past_due')
        }
        break
      }
      default:
        // Evento não tratado: responde 200 para evitar reentrega.
        break
    }
    return new Response('ok', { status: 200 })
  } catch (err) {
    return new Response(`Erro ao processar: ${(err as Error).message}`, { status: 500 })
  }
})
