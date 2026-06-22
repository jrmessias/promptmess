import { motion } from 'motion/react'
import { Copy, Eye, Paperclip, Sparkles, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PromptImage from '@/components/PromptImage'
import { PREMIUM_URL, LOREM } from '@/data/prompts'
import { cn } from '@/lib/utils'

function PromptCard({ prompt, index = 0, onView, onCopy }) {
  const isPremium = Boolean(prompt.premium)

  const openPremium = (e) => {
    e.stopPropagation()
    if (PREMIUM_URL && PREMIUM_URL !== '#') {
      window.open(PREMIUM_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.4), ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
      onClick={() => onView(prompt)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <PromptImage src={prompt.image} alt={prompt.title} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        {isPremium ? (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-500 backdrop-blur-md">
            <Star className="h-3 w-3 fill-current" />
            Premium
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

        <h3 className="font-semibold leading-snug">{prompt.title}</h3>

        <p
          className={cn(
            'line-clamp-2 text-sm text-muted-foreground',
            isPremium && 'select-none blur-sm',
          )}
        >
          {isPremium ? LOREM : prompt.prompt}
        </p>

        <div className="mt-auto flex gap-2 pt-1">
          {isPremium ? (
            <Button
              className="flex-1 gap-2 bg-amber-500 text-amber-950 hover:bg-amber-400"
              onClick={openPremium}
            >
              <Star className="h-4 w-4 fill-current" />
              Premium
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
        </div>
      </div>
    </motion.article>
  )
}

export default PromptCard
