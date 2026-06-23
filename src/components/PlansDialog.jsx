import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Star } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { startCheckout } from '@/lib/billing'
import { canViewPremium } from '@/lib/access'
import { cn } from '@/lib/utils'

// Valores em R$ são placeholders — ajuste conforme os preços reais do Stripe.
const PLANS = [
  {
    id: 'free',
    name: 'Grátis',
    price: 'R$ 0',
    period: '',
    features: ['Acesso a todos os prompts grátis', 'Busca e filtros', 'Sem cartão'],
    paid: false,
  },
  {
    id: 'monthly',
    name: 'Mensal',
    price: 'R$ 19,90',
    period: '/mês',
    features: ['Tudo do grátis', 'Todos os prompts premium', 'Novos prompts toda semana'],
    paid: true,
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 'R$ 199',
    period: '/ano',
    badge: 'Economize ~17%',
    features: ['Tudo do mensal', '2 meses grátis', 'Melhor custo-benefício'],
    paid: true,
  },
]

function PlansDialog({ open, onOpenChange }) {
  const { user, profile } = useAuth()
  const navigate = useNavigate()
  const [loadingPlan, setLoadingPlan] = useState(null)
  const isPremium = canViewPremium(profile)

  async function handleSubscribe(plan) {
    if (!user) {
      onOpenChange(false)
      navigate('/login')
      return
    }
    try {
      setLoadingPlan(plan.id)
      await startCheckout(plan.id)
    } catch (err) {
      toast.error(err.message || 'Não foi possível iniciar o checkout.')
      setLoadingPlan(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-2xl">Escolha seu plano</DialogTitle>
          <DialogDescription className="text-base">
            Desbloqueie todos os prompts premium. Cancele quando quiser.
          </DialogDescription>
        </DialogHeader>

        <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PLANS.map((plan) => {
            const current = plan.paid ? isPremium : !isPremium
            return (
              <div
                key={plan.id}
                className={cn(
                  'flex flex-col rounded-2xl border bg-card p-5',
                  plan.id === 'annual'
                    ? 'border-primary shadow-[var(--shadow-glow)]'
                    : 'border-border',
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.badge && (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {!plan.paid ? (
                  <Button
                    variant="outline"
                    className="mt-5"
                    disabled={current}
                    onClick={() => onOpenChange(false)}
                  >
                    {current ? 'Plano atual' : 'Continuar grátis'}
                  </Button>
                ) : current ? (
                  <Button className="mt-5" disabled>
                    Plano atual
                  </Button>
                ) : (
                  <Button
                    className={cn(
                      'mt-5 gap-2',
                      plan.id === 'annual' && 'bg-amber-500 text-amber-950 hover:bg-amber-400',
                    )}
                    disabled={loadingPlan === plan.id}
                    onClick={() => handleSubscribe(plan)}
                  >
                    <Star className="h-4 w-4 fill-current" />
                    {loadingPlan === plan.id ? 'Redirecionando…' : `Assinar ${plan.name}`}
                  </Button>
                )}
              </div>
            )
          })}
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default PlansDialog
