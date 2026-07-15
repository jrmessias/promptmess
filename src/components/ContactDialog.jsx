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

const contactSchema = z.object({
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
  message: z
    .string()
    .trim()
    .min(10, 'A mensagem precisa ter ao menos 10 caracteres.')
    .max(2000, 'Mensagem muito longa (máx. 2000 caracteres).'),
})

function ContactDialog() {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const values = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    const result = contactSchema.safeParse(values)
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
          subject: `Contato de ${form.name.value}`,
          ...result.data
        }),
      })
      const data = await res.json()

      if (data.success) {
        toast.success('Mensagem enviada! Responderemos por e-mail em breve.')
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
      <DialogTrigger className="transition-colors hover:text-foreground">
        Contato
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contato</DialogTitle>
          <DialogDescription>
            Tem alguma dúvida, sugestão ou quer enviar um prompt? Preencha o
            formulário abaixo e responderemos por e-mail.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="contact-name"
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
            <label htmlFor="contact-email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              id="contact-email"
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
            <label htmlFor="contact-message" className="text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="contact-message"
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
            {sending ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
