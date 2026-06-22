import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Wordmark from '@/components/Wordmark'

function LegalLayout({ title, updatedAt, children }) {
  return (
    <div className="min-h-svh bg-background">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <header className="relative border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-6">
          <Link to="/" className="text-xl font-bold">
            <Wordmark />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar à galeria
          </Link>
        </div>
      </header>

      <main className="container relative mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </main>

      <footer className="relative mt-8 border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-sm text-muted-foreground">
          <div className="flex gap-4">
            <Link to="/termos" className="transition-colors hover:text-foreground">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </Link>
          </div>
          <p className="text-xs opacity-70">© 2026 promptmess</p>
        </div>
      </footer>
    </div>
  )
}

export default LegalLayout
