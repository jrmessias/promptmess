import { useState } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const creditSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe seu nome (mínimo 2 caracteres).')
    .max(100, 'Nome muito longo.'),
  email: z
    .string()
    .trim()
    .min(1, 'Informe seu e-mail.')
    .email('Digite um e-mail válido.'),
  link: z
    .string()
    .trim()
    .min(1, 'Informe o link para os créditos.')
    .url('Digite um link válido (ex.: https://...).'),
  message: z
    .string()
    .trim()
    .max(2000, 'Texto muito longo (máx. 2000 caracteres).')
    .optional()
    .or(z.literal('')),
})

function CreditClaimDialog({ promptId, promptTitle }) {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const values = {
      name: form.name.value,
      email: form.email.value,
      link: form.link.value,
      message: form.message.value,
    }

    const result = creditSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0]
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }
    setErrors({})

    if (!WEB3FORMS_KEY) {
      toast.error('Formulário não configurado. Defina VITE_WEB3FORMS_KEY no .env.')
      return
    }

    setSending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Reivindicação de crédito — prompt #${promptId} (${promptTitle})`,
          promptId: String(promptId),
          ...result.data,
        }),
      })
      const data = await res.json()

      if (data.success) {
        toast.success('Reivindicação enviada! Vamos analisar e responder por e-mail.')
        form.reset()
        setOpen(false)
      } else {
        toast.error('Não foi possível enviar. Tente novamente.')
      }
    } catch {
      toast.error('Erro de conexão. Tente novamente.')
    } finally {
      setSending(false)
    }
  }

  const clearError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleOpenChange = (next) => {
    if (!next) setErrors({})
    setOpen(next)
  }

  const textareaClass = cn(
    'min-h-24 rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-base transition-colors outline-none',
    'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
  )

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="text-xs text-primary underline underline-offset-2 transition-colors hover:text-primary/80">
        Créditos
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créditos</DialogTitle>
          <DialogDescription>
            Este prompt é seu? Informe o nome e o link para colocarmos nos
            créditos.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="credit-name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="credit-name"
              name="name"
              disabled={sending}
              aria-invalid={Boolean(errors.name)}
              onChange={() => clearError('name')}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="credit-email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              id="credit-email"
              name="email"
              type="email"
              disabled={sending}
              aria-invalid={Boolean(errors.email)}
              onChange={() => clearError('email')}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="credit-link" className="text-sm font-medium">
              Link
            </label>
            <Input
              id="credit-link"
              name="link"
              type="url"
              placeholder="https://..."
              disabled={sending}
              aria-invalid={Boolean(errors.link)}
              onChange={() => clearError('link')}
            />
            {errors.link && (
              <p className="text-xs text-destructive">{errors.link}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="credit-message" className="text-sm font-medium">
              Texto <span className="font-normal text-muted-foreground">(opcional)</span>
            </label>
            <textarea
              id="credit-message"
              name="message"
              disabled={sending}
              aria-invalid={Boolean(errors.message)}
              onChange={() => clearError('message')}
              className={textareaClass}
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>
          <Button type="submit" className="mt-1 gap-2" disabled={sending}>
            <Send className="h-4 w-4" />
            {sending ? 'Enviando...' : 'Enviar reivindicação'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreditClaimDialog
