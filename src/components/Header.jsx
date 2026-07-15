import { Link } from 'react-router-dom'
import { LogIn, LogOut, Star, User } from 'lucide-react'
import { toast } from 'sonner'
import HowToDialog from '@/components/HowToDialog'
import Logo from '@/components/Logo'
import Wordmark from '@/components/Wordmark'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { usePlans } from '@/context/PlansContext'

function Header() {
  const { user, profile, signOut } = useAuth()
  const { openPlans } = usePlans()
  const displayName = profile?.full_name
    ? `${profile.full_name} (${user?.email})`
    : user?.email

  async function handleSignOut() {
    await signOut()
    toast.success('Você saiu da sua conta.')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-8 sm:py-10">
        <div className="flex items-center gap-4">
          {/*<Logo className="h-14 w-14 shrink-0 rounded-2xl ring-1 ring-primary/30" />*/}
          <div className="min-w-0">
            <h1 className="text-2xl font-bold leading-tight sm:text-4xl">
              <Wordmark />
            </h1>
            <p className="hidden text-base text-muted-foreground sm:block">
              Prompts prontos para gerar imagens com IA
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {user && (
            <Link
              to="/conta"
              className="inline-flex max-w-[16rem] items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <User className="h-4 w-4 shrink-0" />
              <span className="hidden truncate sm:inline">{displayName}</span>
            </Link>
          )}
          <div className="flex items-center gap-2.5">
            {user && (
              <Button
                size="lg"
                className="h-11 gap-2 bg-amber-500 px-5 text-base text-amber-950 hover:bg-amber-400"
                onClick={openPlans}
              >
                <Star className="h-5 w-5 fill-current" />
                Planos
              </Button>
            )}
            {/*{user ? (*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    variant="outline"*/}
            {/*    className="h-11 gap-2 px-5 text-base"*/}
            {/*    onClick={handleSignOut}*/}
            {/*  >*/}
            {/*    <LogOut className="h-5 w-5" />*/}
            {/*    Sair*/}
            {/*  </Button>*/}
            {/*) : (*/}
            {/*  <Button asChild size="lg" className="h-11 gap-2 px-5 text-base">*/}
            {/*    <Link to="/login">*/}
            {/*      <LogIn className="h-5 w-5" />*/}
            {/*      Entrar*/}
            {/*    </Link>*/}
            {/*  </Button>*/}
            {/*)}*/}
            <HowToDialog size="lg" className="h-11 gap-2 px-5 text-base" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
