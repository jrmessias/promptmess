import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, LogOut, Mail, Star, User } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { canViewPremium } from '@/lib/access'
import { cn } from '@/lib/utils'

function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function Account() {
  const { user, profile, loading, signOut } = useAuth()
  const navigate = useNavigate()

  // Rota protegida: sem usuário (após carregar), volta para o login.
  useEffect(() => {
    if (!loading && !user) navigate('/login', { replace: true })
  }, [loading, user, navigate])

  if (!user) return null

  const name = profile?.full_name || '—'
  const email = profile?.email || user.email || '—'
  const createdAt = formatDate(profile?.created_at || user.created_at)
  const isPremium = canViewPremium(profile)
  const planLabel = { monthly: 'Mensal', annual: 'Anual' }[profile?.plan] || '—'
  const hasSubscription = Boolean(profile?.plan || profile?.subscription_ends_at)

  async function handleSignOut() {
    await signOut()
    toast.success('Você saiu da sua conta.')
    navigate('/')
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à galeria
        </Link>

        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-[var(--shadow-glow)] backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <User className="h-10 w-10" />
            </div>
            <h1 className="mt-4 text-2xl font-bold">{name}</h1>
            <span
              className={cn(
                'mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
                isPremium
                  ? 'border-amber-500/30 bg-amber-500/15 text-amber-500'
                  : 'border-border bg-muted text-muted-foreground',
              )}
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              {isPremium ? 'Premium' : 'Grátis'}
            </span>
          </div>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <User className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <dt className="text-xs text-muted-foreground">Nome</dt>
                <dd className="truncate font-medium">{name}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <dt className="text-xs text-muted-foreground">E-mail</dt>
                <dd className="truncate font-medium">{email}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <Calendar className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <dt className="text-xs text-muted-foreground">Conta criada em</dt>
                <dd className="font-medium">{createdAt}</dd>
              </div>
            </div>

            {hasSubscription && (
              <>
                <div className="flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                  <Star className="h-5 w-5 shrink-0 fill-current text-amber-500" />
                  <div className="min-w-0">
                    <dt className="text-xs text-muted-foreground">Plano</dt>
                    <dd className="font-medium">{planLabel}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <Calendar className="h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs text-muted-foreground">Início da assinatura</dt>
                    <dd className="font-medium">{formatDate(profile?.subscription_started_at)}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <Calendar className="h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs text-muted-foreground">
                      {isPremium ? 'Renova/expira em' : 'Expirou em'}
                    </dt>
                    <dd className="font-medium">{formatDate(profile?.subscription_ends_at)}</dd>
                  </div>
                </div>
              </>
            )}
          </dl>

          <Button
            variant="outline"
            className="mt-8 h-11 w-full gap-2"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Account
