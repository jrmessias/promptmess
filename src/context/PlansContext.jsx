import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import PlansDialog from '@/components/PlansDialog'
import { useAuth } from '@/context/AuthContext'

const PlansContext = createContext(null)

export function PlansProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const { refreshProfile } = useAuth()

  const openPlans = useCallback(() => setOpen(true), [])

  // Retorno do checkout do Stripe: atualiza o perfil e avisa o usuário.
  useEffect(() => {
    const status = searchParams.get('checkout')
    if (!status) return
    if (status === 'success') {
      refreshProfile?.()
      toast.success('Assinatura confirmada!', {
        description: 'Seu acesso premium foi liberado.',
      })
    } else if (status === 'cancel') {
      toast('Checkout cancelado.')
    }
    searchParams.delete('checkout')
    setSearchParams(searchParams, { replace: true })
  }, [searchParams, setSearchParams, refreshProfile])

  return (
    <PlansContext.Provider value={{ openPlans }}>
      {children}
      <PlansDialog open={open} onOpenChange={setOpen} />
    </PlansContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePlans() {
  const ctx = useContext(PlansContext)
  if (!ctx) throw new Error('usePlans deve ser usado dentro de <PlansProvider>')
  return ctx
}
