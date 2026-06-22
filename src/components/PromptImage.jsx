import { useState, useEffect } from 'react'
import { ImageIcon } from 'lucide-react'

// Renderiza a imagem do prompt ou um placeholder.
// Se o arquivo ainda não existir (erro de carregamento), cai no placeholder.
function PromptImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`.trim()}
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-card text-muted-foreground ${className}`}
      role="img"
      aria-label={`${alt} (imagem em breve)`}
    >
      <ImageIcon className="h-8 w-8 opacity-40" />
      <span className="px-4 text-center text-xs opacity-60">Imagem em breve</span>
    </div>
  )
}

export default PromptImage
