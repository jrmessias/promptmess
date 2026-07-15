import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Copy, Eye, Lock, LogIn, Paperclip, Sparkles, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PromptImage from '@/components/PromptImage'
import { useAuth } from '@/context/AuthContext'
import { usePlans } from '@/context/PlansContext'
import { getLockReason } from '@/lib/access'

function PromptCard({ prompt, index = 0, onView, onCopy }) {
  const { user, profile } = useAuth()
  const { openPlans } = usePlans()
  const navigate = useNavigate()
  const isPremium = Boolean(prompt.premium)
  const lock = getLockReason(prompt, { user, profile })

  const goToPlans = (e) => {
    e.stopPropagation()
    if (!user) {
      navigate('/login')
      return
    }
    openPlans()
  }

  const goToLogin = (e) => {
    e.stopPropagation()
    navigate('/login')
  }

  const handleView = () => {
    if (lock) {
      if (lock === 'premium' && user) {
        openPlans()
        return
      }
      navigate('/login')
      return
    }
    onView(prompt)
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.4), ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
      onClick={handleView}
    >
      <div className="relative aspect-[5/6] overflow-hidden bg-muted">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <PromptImage src={prompt.image} alt={prompt.title} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-card via-card/70 to-transparent" />
        {isPremium ? (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-500 backdrop-blur-md">
            <Star className="h-3 w-3 fill-current" />
            Premium
          </div>
        ) : prompt.requiresLogin ? (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            <Lock className="h-3 w-3 text-primary" />
            Login
          </div>
        ) : (
          <div className="absolute right-3 top-3 rounded-full bg-background/60 p-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </div>
        )}
        {prompt.attachments?.length > 0 && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/60 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            <Paperclip className="h-3 w-3 text-primary" />
            {prompt.attachments.length} {prompt.attachments.length === 1 ? 'anexo' : 'anexos'}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="text-xs">
            {prompt.category}
          </Badge>
          {prompt.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-2 pt-1">
          {lock === 'premium' ? (
            <Button
              className="flex-1 gap-2 bg-amber-500 text-amber-950 hover:bg-amber-400"
              onClick={goToPlans}
            >
              <Star className="h-4 w-4 fill-current" />
              Premium
            </Button>
          ) : lock === 'login' ? (
            <Button className="flex-1 gap-2" onClick={goToLogin}>
              <LogIn className="h-4 w-4" />
              Entrar para ver
            </Button>
          ) : (
            <Button
              className="flex-1 gap-2"
              onClick={(e) => {
                e.stopPropagation()
                onCopy(prompt.prompt)
              }}
            >
              <Copy className="h-4 w-4" />
              Copiar Prompt
            </Button>
          )}
          {!lock && (
            <Button
              variant="outline"
              size="icon"
              aria-label="Visualizar prompt"
              onClick={(e) => {
                e.stopPropagation()
                onView(prompt)
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default PromptCard
