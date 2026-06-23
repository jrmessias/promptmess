import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Eye, EyeOff, Loader2, MailCheck } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Logo from '@/components/Logo'
import Wordmark from '@/components/Wordmark'
import { useAuth } from '@/context/AuthContext'

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.39 14.97.4 12 .4A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 6.68 9.14 4.75 12 4.75z"
      />
    </svg>
  )
}

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const { signUp, signInWithGoogle, isConfigured } = useAuth()
  const navigate = useNavigate()

  function notConfigured() {
    toast.error('Supabase não configurado', {
      description: 'Defina as chaves no arquivo .env. Veja o SUPABASE_SETUP.md.',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isConfigured) return notConfigured()
    setSubmitting(true)
    const { data, error } = await signUp(email, password, name)
    setSubmitting(false)
    if (error) {
      toast.error('Não foi possível criar a conta', { description: error.message })
      return
    }
    // Se a confirmação por e-mail estiver ativa, não há sessão imediata.
    if (data.session) {
      toast.success('Conta criada!')
      navigate('/')
    } else {
      setSent(true)
    }
  }

  async function handleGoogle() {
    if (!isConfigured) return notConfigured()
    const { error } = await signInWithGoogle()
    if (error) {
      toast.error('Erro ao entrar com Google', { description: error.message })
    }
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à galeria
        </Link>

        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-[var(--shadow-glow)] backdrop-blur">
          {sent ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <MailCheck className="h-7 w-7" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">Confirme seu e-mail</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Enviamos um link de confirmação para{' '}
                <span className="font-medium text-foreground">{email}</span>. Confirme para ativar
                sua conta e entrar.
              </p>
              <Button asChild className="mt-6 h-11 w-full">
                <Link to="/login">Ir para o login</Link>
              </Button>
            </div>
          ) : (
          <>
          <div className="flex flex-col items-center text-center">
            <Logo className="h-14 w-14 rounded-2xl ring-1 ring-primary/30" />
            <h1 className="mt-4 text-2xl font-bold">
              Criar conta no <br/><Wordmark />
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Cadastre-se para salvar favoritos e acessar prompts premium.
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            className="mt-6 h-11 w-full gap-2"
            onClick={handleGoogle}
          >
            <GoogleIcon className="size-5" />
            Continuar com Google
          </Button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            ou
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <Input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="voce@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="Mínimo de 8 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="h-11 w-full gap-2" disabled={submitting}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Criar conta
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Ao criar uma conta, você concorda com os{' '}
            <Link to="/termos" className="font-medium text-primary hover:underline">
              Termos de Uso
            </Link>{' '}
            e a{' '}
            <Link to="/privacidade" className="font-medium text-primary hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Entrar
            </Link>
          </p>
          </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup
