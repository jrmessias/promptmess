# Imagens da galeria

Coloque os arquivos de imagem seguindo a convenção de nomes abaixo. Enquanto o
arquivo não existir, o card mostra automaticamente o placeholder "Imagem em breve".

## Capas (imagem principal de cada card)

Pasta: `public/imagens/capas/`

```
prompt-{id}.jpg
```

Exemplos:
- `prompt-1.jpg`  → capa do prompt de id 1
- `prompt-2.jpg`  → capa do prompt de id 2
- ...
- `prompt-80.jpg` → capa do prompt de id 80

Proporção recomendada: **3:4** (retrato). Ex.: 900×1200px.

## Imagens de referência (anexos)

Pasta: `public/imagens/referencias/`

```
prompt-{id}-ref-{n}.jpg
```

Exemplos:
- `prompt-1-ref-1.jpg`  → 1ª referência do prompt de id 1
- `prompt-1-ref-2.jpg`  → 2ª referência do prompt de id 1
- `prompt-7-ref-1.jpg`  → 1ª referência do prompt de id 7

Proporção recomendada: **1:1** (quadrada).

## Observações

- O `id` de cada prompt está em `src/data/prompts.js`.
- O formato padrão é **.jpg**. Se usar outro (`.png`, `.webp`), ajuste o caminho
  no campo `image` do prompt correspondente em `src/data/prompts.js`.
- Os caminhos começam em `/imagens/...` porque a pasta `public/` é servida na raiz.
