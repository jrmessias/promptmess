import { cn } from '@/lib/utils'

function TagFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
      {categories.map((cat) => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
              isActive
                ? 'border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]'
                : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default TagFilter
