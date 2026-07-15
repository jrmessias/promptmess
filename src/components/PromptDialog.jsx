import { useNavigate } from 'react-router-dom'
import { Copy, Lock, LogIn, Paperclip, Star } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PromptImage from '@/components/PromptImage'
import CreditClaimDialog from '@/components/CreditClaimDialog'
import { LOREM } from '@/data/prompts'
import { useAuth } from '@/context/AuthContext'
import { usePlans } from '@/context/PlansContext'
import { getLockReason } from '@/lib/access'
import { cn } from '@/lib/utils'

function PromptDialog({ prompt, open, onOpenChange, onCopy }) {
  const { user, profile } = useAuth()
  const { openPlans } = usePlans()
  const navigate = useNavigate()
  if (!prompt) return null
  const isPremium = Boolean(prompt.premium)
  const lock = getLockReason(prompt, { user, profile })
  const locked = Boolean(lock)

  const goToPlans = () => {
    onOpenChange(false)
    if (!user) {
      navigate('/login')
      return
    }
    openPlans()
  }

  const goToLogin = () => {
    onOpenChange(false)
    navigate('/login')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-5xl">
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden bg-muted sm:aspect-auto">
            <PromptImage src={prompt.image} alt={prompt.title} />
          </div>
          <div className="flex flex-col p-6">
            <DialogHeader className="space-y-3 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="w-fit">
                  {prompt.category}
                </Badge>
                {isPremium ? (
                  <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-500">
                    <Star className="h-3 w-3 fill-current" />
                    Premium
                  </span>
                ) : prompt.requiresLogin ? (
                  <span className="flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs font-medium text-foreground">
                    <Lock className="h-3 w-3 text-primary" />
                    Login
                  </span>
                ) : null}
              </div>
              <DialogTitle className="text-2xl">{prompt.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {prompt.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="relative mt-4">
              <p
                className={cn(
                  'whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground',
                  locked && 'select-none blur-sm',
                )}
              >
                {locked ? LOREM : prompt.prompt}
              </p>
              {lock === 'premium' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-500 backdrop-blur-sm">
                    <Star className="h-4 w-4 fill-current" />
                    Conteúdo Premium
                  </span>
                </div>
              )}
              {lock === 'login' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                    <Lock className="h-4 w-4 text-primary" />
                    Entre para ver
                  </span>
                </div>
              )}
            </div>

            {prompt.attachments?.length > 0 && (
              <div className="mt-5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Paperclip className="h-4 w-4 text-primary" />
                  Imagens de referência
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {prompt.attachments.length === 1 ? 'Imagem' : 'Imagens'} base e/ou anexo para geração de nova imagem.
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {prompt.attachments.map((att) => (
                    <div
                      key={att.id}
                      className="aspect-square overflow-hidden rounded-lg border border-border bg-muted"
                    >
                      <div className={cn('h-full w-full', locked && 'select-none blur-sm')}>
                        <PromptImage src={att.image} alt={att.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {prompt.credit ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Crédito:{' '}
                <a
                  href={prompt.credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {prompt.credit.site}
                </a>
              </p>
            ) : (
              <div className="mt-4">
                <CreditClaimDialog promptId={prompt.id} promptTitle={prompt.title} />
              </div>
            )}

            {lock === 'premium' ? (
              <Button
                className="mt-6 gap-2 bg-amber-500 text-amber-950 hover:bg-amber-400"
                onClick={goToPlans}
              >
                <Star className="h-4 w-4 fill-current" />
                Premium
              </Button>
            ) : lock === 'login' ? (
              <Button className="mt-6 gap-2" onClick={goToLogin}>
                <LogIn className="h-4 w-4" />
                Entrar para ver
              </Button>
            ) : (
              <Button className="mt-6 gap-2" onClick={() => onCopy(prompt.prompt)}>
                <Copy className="h-4 w-4" />
                Copiar Prompt
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PromptDialog
