import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { AuthProvider } from '@/context/AuthContext'
import { PlansProvider } from '@/context/PlansContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlansProvider>
          <App />
          <Toaster richColors position="bottom-right" />
        </PlansProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
