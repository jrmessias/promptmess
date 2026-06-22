import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const options = [
  { key: 'all', label: 'Todos' },
  { key: 'free', label: 'Grátis' },
  { key: 'premium', label: 'Premium', icon: Star },
]

function AccessFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por acesso">
      {options.map(({ key, label, icon: Icon }) => {
        const isActive = active === key
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={isActive}
            className={cn(
              'flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
              isActive
                ? 'border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]'
                : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {Icon && <Icon className="h-3.5 w-3.5 fill-current" />}
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default AccessFilter
