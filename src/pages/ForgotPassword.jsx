import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MailCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Logo from '@/components/Logo'
import Wordmark from '@/components/Wordmark'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 py-10">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        <Link
          to="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o login
        </Link>

        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-[var(--shadow-glow)] backdrop-blur">
          {sent ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <MailCheck className="h-7 w-7" />
              </div>
              <h1 className="mt-4 text-2xl font-bold">Verifique seu e-mail</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Se houver uma conta associada a{' '}
                <span className="font-medium text-foreground">{email}</span>, enviamos um link
                para você redefinir a senha.
              </p>
              <Button asChild className="mt-6 h-11 w-full">
                <Link to="/login">Voltar para o login</Link>
              </Button>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Usar outro e-mail
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center text-center">
                <Logo className="h-14 w-14 rounded-2xl ring-1 ring-primary/30" />
                <h1 className="mt-4 text-2xl font-bold">Esqueceu a senha?</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Informe o e-mail da sua conta <Wordmark /> e enviaremos um link para você criar
                  uma nova senha.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

                <Button type="submit" className="h-11 w-full">
                  Enviar link de recuperação
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Lembrou a senha?{' '}
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

export default ForgotPassword
