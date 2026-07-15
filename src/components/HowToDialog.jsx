import { HelpCircle, Sparkles } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const steps = [
  'Navegue pela galeria e use a busca, as tags ou os filtros para encontrar o estilo desejado.',
  'Clique em um card para ver a imagem de referência e os detalhes do prompt.',
  'Nos prompts, use "Copiar Prompt" para copiar o texto completo.',
  'Altere as informações entre [ ] (colchetes) para personalizar o seu prompt.',
  // 'Os prompts marcados com ⭐ Premium são desbloqueados pelo botão Premium.',
  'Cole o prompt na sua ferramenta de IA (Midjourney, DALL·E, etc.) e ajuste proporção e estilo.',
]

function HowToDialog({ size = 'sm', className }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={size} className={className}>
          <HelpCircle className="h-5 w-5" />
          Como usar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl">Como usar</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Siga o passo a passo para gerar imagens incríveis com IA.
          </DialogDescription>
        </DialogHeader>
        <ol className="mt-2 space-y-3">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-border/60 bg-muted/30 p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  )
}

export default HowToDialog
