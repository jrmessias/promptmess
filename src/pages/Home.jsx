import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import TagFilter from '@/components/TagFilter'
import AccessFilter from '@/components/AccessFilter'
import PromptCard from '@/components/PromptCard'
import PromptDialog from '@/components/PromptDialog'
import Pagination from '@/components/Pagination'
import { categories, prompts } from '@/data/prompts'

const PAGE_SIZE = 40

function Home() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('Todos')
  const [access, setAccess] = useState('all')
  const [selected, setSelected] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return prompts.filter((p) => {
      const matchTag = activeTag === 'Todos' || p.category === activeTag
      const matchAccess =
        access === 'all' || (access === 'premium' ? Boolean(p.premium) : !p.premium)
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      return matchTag && matchAccess && matchQuery
    })
  }, [query, activeTag, access])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  function resetToFirstPage() {
    if (searchParams.get('page')) {
      searchParams.delete('page')
      setSearchParams(searchParams, { replace: true })
    }
  }

  function handleSearch(value) {
    setQuery(value)
    resetToFirstPage()
  }

  function handleTag(tag) {
    setActiveTag(tag)
    resetToFirstPage()
  }

  function handleAccess(value) {
    setAccess(value)
    resetToFirstPage()
  }

  function handlePageChange(next) {
    setSearchParams(
      next <= 1 ? {} : { page: String(next) },
      { replace: false },
    )
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleView(prompt) {
    setSelected(prompt)
    setDialogOpen(true)
  }

  async function handleCopy(text) {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Prompt copiado!', {
        description: 'Cole na sua ferramenta de IA preferida.',
      })
    } catch {
      toast.error('Não foi possível copiar o prompt.')
    }
  }

  return (
    <div className="min-h-svh bg-background">
      {/* brilhos de fundo decorativos */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
      </div>

      <Header />

      <main className="container relative mx-auto px-4 pb-8 pt-10 sm:pt-12">
        <SearchBar value={query} onChange={handleSearch} />

        <div className="mt-6 flex flex-col gap-3">
          <AccessFilter active={access} onChange={handleAccess} />
          <TagFilter categories={categories} active={activeTag} onChange={handleTag} />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'prompt encontrado' : 'prompts encontrados'}
        </p>

        {pageItems.length > 0 ? (
          <section className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((prompt, i) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                index={i}
                onView={handleView}
                onCopy={handleCopy}
              />
            ))}
          </section>
        ) : (
          <div className="mt-16 text-center text-muted-foreground">
            Nenhum prompt encontrado. Tente outra busca ou categoria.
          </div>
        )}

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <footer className="mt-16 border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center gap-1 px-4 py-8 text-center text-sm text-muted-foreground">
          <p>promptmess — Galeria de prompts de imagem para IA</p>
          <div className="flex gap-4">
            <Link to="/termos" className="transition-colors hover:text-foreground">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </Link>
          </div>
          <p className="text-xs opacity-70">Conteúdo de exemplo — adicione suas imagens e prompts.</p>
        </div>
      </footer>

      <PromptDialog
        prompt={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCopy={handleCopy}
      />
    </div>
  )
}

export default Home
