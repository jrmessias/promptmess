import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import HowToDialog from '@/components/HowToDialog'
import Logo from '@/components/Logo'
import Wordmark from '@/components/Wordmark'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-8 sm:py-10">
        <div className="flex items-center gap-4">
          <Logo className="h-14 w-14 shrink-0 rounded-2xl ring-1 ring-primary/30" />
          <div className="min-w-0">
            <h1 className="text-2xl font-bold leading-tight sm:text-4xl">
              <Wordmark />
            </h1>
            <p className="hidden text-base text-muted-foreground sm:block">
              Prompts prontos para gerar imagens com IA — grátis e premium
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button asChild size="sm" className="gap-2">
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              Entrar
            </Link>
          </Button>
          <HowToDialog />
        </div>
      </div>
    </header>
  )
}

export default Header
