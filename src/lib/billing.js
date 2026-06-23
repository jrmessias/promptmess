import { supabase } from '@/lib/supabase'

// Invoca a Edge Function que cria a Stripe Checkout Session e redireciona
// o navegador para a URL retornada. `plan` é 'monthly' ou 'annual'.
export async function startCheckout(plan) {
  const { data, error } = await supabase.functions.invoke('create-checkout-session', {
    body: { plan },
  })
  if (error) throw new Error(error.message || 'Falha ao iniciar o checkout.')
  if (!data?.url) throw new Error('Resposta inválida do checkout.')
  window.location.assign(data.url)
}
