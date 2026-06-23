// Regra única de visualização de conteúdo premium.
// Verdadeiro somente quando há perfil logado marcado como premium.
export function canViewPremium(profile) {
  return profile?.is_premium === true
}

// Motivo pelo qual um prompt está bloqueado para o usuário atual.
// Retorna null (liberado) ou 'login' (exige login) ou 'premium' (exige premium).
// Prioridade: premium exige login implicitamente, então é checado primeiro.
export function getLockReason(prompt, { user, profile }) {
  if (prompt.premium) {
    return canViewPremium(profile) ? null : 'premium'
  }
  if (prompt.requiresLogin) {
    return user ? null : 'login'
  }
  return null
}
