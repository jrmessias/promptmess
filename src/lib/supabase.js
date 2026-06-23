import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Sinaliza se as variáveis de ambiente foram configuradas. Permite que a UI
// avise o usuário em vez de quebrar quando o projeto Supabase ainda não existe.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn(
    '[Supabase] VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY não definidos. ' +
      'Copie .env.example para .env e preencha as chaves. Veja SUPABASE_SETUP.md.',
  )
}

// Usa placeholders válidos quando não configurado para não estourar no boot;
// as chamadas de auth só são acionadas a partir das telas, que checam
// isSupabaseConfigured antes.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
)
