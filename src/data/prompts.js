// Dados de exemplo (placeholder). Substitua `image` pela URL/caminho da sua imagem.
// Cada item: { id, title, image, category, tags[], prompt }
// Prompts pagos: adicione `premium: true` ao item. Sem o campo = gratuito.
//
// ATENÇÃO: este é um site estático — todo texto deste arquivo é enviado ao
// navegador e fica visível no dev console. NÃO coloque o texto real de prompts
// premium aqui. Deixe `prompt: ""` nos premium; a interface exibe um lorem
// ipsum no lugar. Entregue o conteúdo real ao cliente por outro meio.

// TODO: trocar pelo link real de compra/assinatura
export const PREMIUM_URL = "#"

// Texto fictício exibido (ofuscado) no lugar do prompt em itens premium.
export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. --ar 3:4 --style raw"

export const categories = [
  "Todos",
  "Masculino",
  "Feminino",
  "Ensaio Fotográfico",
  "Ultrarrealista",
  "Crianças Heróis",
  "Lanches",
  "Anúncios"
]

export const prompts = [
  {
    "id": 1,
    "premium": true,
    "title": "Executivo de Terno Minimalista",
    "category": "Masculino",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "",
    "image": "/imagens/capas/prompt-1.jpg",
    "attachments": [
      {
        "id": "1-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-1-ref-1.jpg"
      },
      {
        "id": "1-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-1-ref-2.jpg"
      }
    ]
  },
  {
    "id": 2,
    "premium": true,
    "title": "Editorial Elegante Luxuoso",
    "category": "Feminino",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "",
    "image": "/imagens/capas/prompt-2.jpg",
    "attachments": []
  },
  {
    "id": 3,
    "title": "Sessão ao Ar Livre Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato vibrante de sessão ao ar livre, estética cinematográfica, capturado com grande angular 24mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-3.jpg",
    "attachments": []
  },
  {
    "id": 4,
    "title": "Detalhe Fotográfico Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "externa",
      "corpo inteiro",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de detalhe fotográfico, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-4.jpg",
    "attachments": [
      {
        "id": "4-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-4-ref-1.jpg"
      }
    ]
  },
  {
    "id": 5,
    "title": "Capa e Máscara Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato urbano de capa e máscara, tom dramático e misterioso, capturado com lente 85mm f/1.4 e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-5.jpg",
    "attachments": []
  },
  {
    "id": 6,
    "title": "Hambúrguer Gourmet Noturno",
    "category": "Lanches",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato noturno de hambúrguer gourmet, atmosfera intimista, capturado com lente 50mm f/1.8 e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-6.jpg",
    "attachments": []
  },
  {
    "id": 7,
    "title": "Campanha de Marca Golden Hour",
    "category": "Anúncios",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato golden hour de campanha de marca, clima editorial de revista, capturado com lente 35mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-7.jpg",
    "attachments": [
      {
        "id": "7-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-7-ref-1.jpg"
      },
      {
        "id": "7-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-7-ref-2.jpg"
      }
    ]
  },
  {
    "id": 8,
    "title": "Retrato Casual Premium",
    "category": "Masculino",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato premium de retrato casual, estética cinematográfica, capturado com grande angular 24mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-8.jpg",
    "attachments": []
  },
  {
    "id": 9,
    "title": "Lifestyle Casual Contemplativo",
    "category": "Feminino",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato contemplativo de lifestyle casual, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-9.jpg",
    "attachments": []
  },
  {
    "id": 10,
    "title": "Retrato Artístico Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "lifestyle",
      "moda",
      "colorido"
    ],
    "prompt": "Retrato clássico de retrato artístico, tom dramático e misterioso, capturado com lente 85mm f/1.4 e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-10.jpg",
    "attachments": [
      {
        "id": "10-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-10-ref-1.jpg"
      }
    ]
  },
  {
    "id": 11,
    "title": "Pele Hiper-detalhada Moderno",
    "category": "Ultrarrealista",
    "tags": [
      "cinematográfico",
      "estúdio",
      "ultrarrealista"
    ],
    "prompt": "Retrato moderno de pele hiper-detalhada, atmosfera intimista, capturado com lente 50mm f/1.8 e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-11.jpg",
    "attachments": []
  },
  {
    "id": 12,
    "title": "Criança Aventureira Editorial",
    "category": "Crianças Heróis",
    "tags": [
      "editorial",
      "externa",
      "corpo inteiro"
    ],
    "prompt": "Retrato editorial de criança aventureira, clima editorial de revista, capturado com lente 35mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-12.jpg",
    "attachments": []
  },
  {
    "id": 13,
    "title": "Sobremesa Premium Cinematográfico",
    "category": "Lanches",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "Retrato cinematográfico de sobremesa premium, estética cinematográfica, capturado com grande angular 24mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-13.jpg",
    "attachments": [
      {
        "id": "13-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-13-ref-1.jpg"
      },
      {
        "id": "13-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-13-ref-2.jpg"
      }
    ]
  },
  {
    "id": 14,
    "title": "Mockup Comercial Dramático",
    "category": "Anúncios",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "Retrato dramático de mockup comercial, vibe minimalista e clean, capturado com teleobjetiva 135mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-14.jpg",
    "attachments": []
  },
  {
    "id": 15,
    "title": "Empresário Confiante Minimalista",
    "category": "Masculino",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato minimalista de empresário confiante, tom dramático e misterioso, capturado com lente 85mm f/1.4 e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-15.jpg",
    "attachments": []
  },
  {
    "id": 16,
    "title": "Vestido de Cetim Luxuoso",
    "category": "Feminino",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato luxuoso de vestido de cetim, atmosfera intimista, capturado com lente 50mm f/1.8 e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-16.jpg",
    "attachments": [
      {
        "id": "16-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-16-ref-1.jpg"
      }
    ]
  },
  {
    "id": 17,
    "title": "Estúdio Profissional Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato vibrante de estúdio profissional, clima editorial de revista, capturado com lente 35mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-17.jpg",
    "attachments": []
  },
  {
    "id": 18,
    "title": "Render 8K Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "colorido",
      "lifestyle",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de render 8k, estética cinematográfica, capturado com grande angular 24mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-18.jpg",
    "attachments": []
  },
  {
    "id": 19,
    "title": "Fantasia Infantil Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato urbano de fantasia infantil, vibe minimalista e clean, capturado com teleobjetiva 135mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-19.jpg",
    "attachments": [
      {
        "id": "19-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-19-ref-1.jpg"
      },
      {
        "id": "19-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-19-ref-2.jpg"
      }
    ]
  },
  {
    "id": 20,
    "title": "Food Styling Noturno",
    "category": "Lanches",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato noturno de food styling, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-20.jpg",
    "attachments": []
  },
  {
    "id": 21,
    "title": "Produto em Destaque Golden Hour",
    "category": "Anúncios",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato golden hour de produto em destaque, atmosfera intimista, capturado com lente 50mm f/1.8 e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-21.jpg",
    "attachments": []
  },
  {
    "id": 22,
    "title": "Aventureiro Urbano Premium",
    "category": "Masculino",
    "tags": [
      "lifestyle",
      "moda",
      "colorido"
    ],
    "prompt": "Retrato premium de aventureiro urbano, clima editorial de revista, capturado com lente 35mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-22.jpg",
    "attachments": [
      {
        "id": "22-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-22-ref-1.jpg"
      }
    ]
  },
  {
    "id": 23,
    "title": "Retrato Glamour Contemplativo",
    "category": "Feminino",
    "tags": [
      "cinematográfico",
      "estúdio",
      "close-up"
    ],
    "prompt": "Retrato contemplativo de retrato glamour, estética cinematográfica, capturado com grande angular 24mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-23.jpg",
    "attachments": []
  },
  {
    "id": 24,
    "title": "Ensaio Noturno Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "editorial",
      "externa",
      "corpo inteiro"
    ],
    "prompt": "Retrato clássico de ensaio noturno, vibe minimalista e clean, capturado com teleobjetiva 135mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-24.jpg",
    "attachments": []
  },
  {
    "id": 25,
    "title": "Realismo Extremo Moderno",
    "category": "Ultrarrealista",
    "tags": [
      "retrato",
      "preto e branco",
      "ultrarrealista"
    ],
    "prompt": "Retrato moderno de realismo extremo, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-25.jpg",
    "attachments": [
      {
        "id": "25-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-25-ref-1.jpg"
      },
      {
        "id": "25-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-25-ref-2.jpg"
      }
    ]
  },
  {
    "id": 26,
    "title": "Pequeno Super-herói Editorial",
    "category": "Crianças Heróis",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "Retrato editorial de pequeno super-herói, atmosfera intimista, capturado com lente 50mm f/1.8 e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-26.jpg",
    "attachments": []
  },
  {
    "id": 27,
    "title": "Pizza Artesanal Cinematográfico",
    "category": "Lanches",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato cinematográfico de pizza artesanal, clima editorial de revista, capturado com lente 35mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-27.jpg",
    "attachments": []
  },
  {
    "id": 28,
    "title": "Anúncio de Perfume Dramático",
    "category": "Anúncios",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato dramático de anúncio de perfume, estética cinematográfica, capturado com grande angular 24mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-28.jpg",
    "attachments": [
      {
        "id": "28-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-28-ref-1.jpg"
      }
    ]
  },
  {
    "id": 29,
    "title": "Estilo Streetwear Minimalista",
    "category": "Masculino",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato minimalista de estilo streetwear, vibe minimalista e clean, capturado com teleobjetiva 135mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-29.jpg",
    "attachments": []
  },
  {
    "id": 30,
    "title": "Beleza Natural Luxuoso",
    "category": "Feminino",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato luxuoso de beleza natural, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-30.jpg",
    "attachments": []
  },
  {
    "id": 31,
    "title": "Ensaio na Praia Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato vibrante de ensaio na praia, atmosfera intimista, capturado com lente 50mm f/1.8 e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-31.jpg",
    "attachments": [
      {
        "id": "31-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-31-ref-1.jpg"
      },
      {
        "id": "31-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-31-ref-2.jpg"
      }
    ]
  },
  {
    "id": 32,
    "title": "Textura Realista Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "corpo inteiro",
      "editorial",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de textura realista, clima editorial de revista, capturado com lente 35mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-32.jpg",
    "attachments": []
  },
  {
    "id": 33,
    "title": "Herói Mirim Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato urbano de herói mirim, estética cinematográfica, capturado com grande angular 24mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-33.jpg",
    "attachments": []
  },
  {
    "id": 34,
    "title": "Café da Manhã Noturno",
    "category": "Lanches",
    "tags": [
      "lifestyle",
      "moda",
      "colorido"
    ],
    "prompt": "Retrato noturno de café da manhã, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-34.jpg",
    "attachments": [
      {
        "id": "34-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-34-ref-1.jpg"
      }
    ]
  },
  {
    "id": 35,
    "title": "Cena de Produto Golden Hour",
    "category": "Anúncios",
    "tags": [
      "cinematográfico",
      "estúdio",
      "close-up"
    ],
    "prompt": "Retrato golden hour de cena de produto, tom dramático e misterioso, capturado com lente 85mm f/1.4 e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-35.jpg",
    "attachments": []
  },
  {
    "id": 36,
    "title": "Executivo de Terno Premium",
    "category": "Masculino",
    "tags": [
      "editorial",
      "externa",
      "corpo inteiro"
    ],
    "prompt": "Retrato premium de executivo de terno, atmosfera intimista, capturado com lente 50mm f/1.8 e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-36.jpg",
    "attachments": []
  },
  {
    "id": 37,
    "title": "Editorial Elegante Contemplativo",
    "category": "Feminino",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "Retrato contemplativo de editorial elegante, clima editorial de revista, capturado com lente 35mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-37.jpg",
    "attachments": [
      {
        "id": "37-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-37-ref-1.jpg"
      },
      {
        "id": "37-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-37-ref-2.jpg"
      }
    ]
  },
  {
    "id": 38,
    "title": "Sessão ao Ar Livre Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "Retrato clássico de sessão ao ar livre, estética cinematográfica, capturado com grande angular 24mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-38.jpg",
    "attachments": []
  },
  {
    "id": 39,
    "title": "Detalhe Fotográfico Moderno",
    "category": "Ultrarrealista",
    "tags": [
      "estúdio",
      "close-up",
      "ultrarrealista"
    ],
    "prompt": "Retrato moderno de detalhe fotográfico, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-39.jpg",
    "attachments": []
  },
  {
    "id": 40,
    "title": "Capa e Máscara Editorial",
    "category": "Crianças Heróis",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato editorial de capa e máscara, tom dramático e misterioso, capturado com lente 85mm f/1.4 e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-40.jpg",
    "attachments": [
      {
        "id": "40-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-40-ref-1.jpg"
      }
    ]
  },
  {
    "id": 41,
    "title": "Hambúrguer Gourmet Cinematográfico",
    "category": "Lanches",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato cinematográfico de hambúrguer gourmet, atmosfera intimista, capturado com lente 50mm f/1.8 e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-41.jpg",
    "attachments": []
  },
  {
    "id": 42,
    "title": "Campanha de Marca Dramático",
    "category": "Anúncios",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato dramático de campanha de marca, clima editorial de revista, capturado com lente 35mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-42.jpg",
    "attachments": []
  },
  {
    "id": 43,
    "title": "Retrato Casual Minimalista",
    "category": "Masculino",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato minimalista de retrato casual, estética cinematográfica, capturado com grande angular 24mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-43.jpg",
    "attachments": [
      {
        "id": "43-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-43-ref-1.jpg"
      },
      {
        "id": "43-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-43-ref-2.jpg"
      }
    ]
  },
  {
    "id": 44,
    "title": "Lifestyle Casual Luxuoso",
    "category": "Feminino",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato luxuoso de lifestyle casual, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-44.jpg",
    "attachments": []
  },
  {
    "id": 45,
    "title": "Retrato Artístico Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato vibrante de retrato artístico, tom dramático e misterioso, capturado com lente 85mm f/1.4 e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-45.jpg",
    "attachments": []
  },
  {
    "id": 46,
    "title": "Pele Hiper-detalhada Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "lifestyle",
      "moda",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de pele hiper-detalhada, atmosfera intimista, capturado com lente 50mm f/1.8 e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-46.jpg",
    "attachments": [
      {
        "id": "46-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-46-ref-1.jpg"
      }
    ]
  },
  {
    "id": 47,
    "title": "Criança Aventureira Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "cinematográfico",
      "estúdio",
      "close-up"
    ],
    "prompt": "Retrato urbano de criança aventureira, clima editorial de revista, capturado com lente 35mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-47.jpg",
    "attachments": []
  },
  {
    "id": 48,
    "title": "Sobremesa Premium Noturno",
    "category": "Lanches",
    "tags": [
      "editorial",
      "externa",
      "corpo inteiro"
    ],
    "prompt": "Retrato noturno de sobremesa premium, estética cinematográfica, capturado com grande angular 24mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-48.jpg",
    "attachments": []
  },
  {
    "id": 49,
    "title": "Mockup Comercial Golden Hour",
    "category": "Anúncios",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "Retrato golden hour de mockup comercial, vibe minimalista e clean, capturado com teleobjetiva 135mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-49.jpg",
    "attachments": [
      {
        "id": "49-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-49-ref-1.jpg"
      },
      {
        "id": "49-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-49-ref-2.jpg"
      }
    ]
  },
  {
    "id": 50,
    "title": "Empresário Confiante Premium",
    "category": "Masculino",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "Retrato premium de empresário confiante, tom dramático e misterioso, capturado com lente 85mm f/1.4 e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-50.jpg",
    "attachments": []
  },
  {
    "id": 51,
    "title": "Vestido de Cetim Contemplativo",
    "category": "Feminino",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato contemplativo de vestido de cetim, atmosfera intimista, capturado com lente 50mm f/1.8 e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-51.jpg",
    "attachments": []
  },
  {
    "id": 52,
    "title": "Estúdio Profissional Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato clássico de estúdio profissional, clima editorial de revista, capturado com lente 35mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-52.jpg",
    "attachments": [
      {
        "id": "52-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-52-ref-1.jpg"
      }
    ]
  },
  {
    "id": 53,
    "title": "Render 8K Moderno",
    "category": "Ultrarrealista",
    "tags": [
      "preto e branco",
      "produto",
      "ultrarrealista"
    ],
    "prompt": "Retrato moderno de render 8k, estética cinematográfica, capturado com grande angular 24mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-53.jpg",
    "attachments": []
  },
  {
    "id": 54,
    "title": "Fantasia Infantil Editorial",
    "category": "Crianças Heróis",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato editorial de fantasia infantil, vibe minimalista e clean, capturado com teleobjetiva 135mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-54.jpg",
    "attachments": []
  },
  {
    "id": 55,
    "title": "Food Styling Cinematográfico",
    "category": "Lanches",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato cinematográfico de food styling, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-55.jpg",
    "attachments": [
      {
        "id": "55-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-55-ref-1.jpg"
      },
      {
        "id": "55-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-55-ref-2.jpg"
      }
    ]
  },
  {
    "id": 56,
    "title": "Produto em Destaque Dramático",
    "category": "Anúncios",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato dramático de produto em destaque, atmosfera intimista, capturado com lente 50mm f/1.8 e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-56.jpg",
    "attachments": []
  },
  {
    "id": 57,
    "title": "Aventureiro Urbano Minimalista",
    "category": "Masculino",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato minimalista de aventureiro urbano, clima editorial de revista, capturado com lente 35mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-57.jpg",
    "attachments": []
  },
  {
    "id": 58,
    "title": "Retrato Glamour Luxuoso",
    "category": "Feminino",
    "tags": [
      "lifestyle",
      "moda",
      "colorido"
    ],
    "prompt": "Retrato luxuoso de retrato glamour, estética cinematográfica, capturado com grande angular 24mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-58.jpg",
    "attachments": [
      {
        "id": "58-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-58-ref-1.jpg"
      }
    ]
  },
  {
    "id": 59,
    "title": "Ensaio Noturno Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "cinematográfico",
      "estúdio",
      "close-up"
    ],
    "prompt": "Retrato vibrante de ensaio noturno, vibe minimalista e clean, capturado com teleobjetiva 135mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-59.jpg",
    "attachments": []
  },
  {
    "id": 60,
    "title": "Realismo Extremo Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "editorial",
      "externa",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de realismo extremo, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-60.jpg",
    "attachments": []
  },
  {
    "id": 61,
    "title": "Pequeno Super-herói Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "Retrato urbano de pequeno super-herói, atmosfera intimista, capturado com lente 50mm f/1.8 e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-61.jpg",
    "attachments": [
      {
        "id": "61-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-61-ref-1.jpg"
      },
      {
        "id": "61-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-61-ref-2.jpg"
      }
    ]
  },
  {
    "id": 62,
    "title": "Pizza Artesanal Noturno",
    "category": "Lanches",
    "tags": [
      "moda",
      "colorido",
      "lifestyle"
    ],
    "prompt": "Retrato noturno de pizza artesanal, clima editorial de revista, capturado com lente 35mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-62.jpg",
    "attachments": []
  },
  {
    "id": 63,
    "title": "Anúncio de Perfume Golden Hour",
    "category": "Anúncios",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato golden hour de anúncio de perfume, estética cinematográfica, capturado com grande angular 24mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-63.jpg",
    "attachments": []
  },
  {
    "id": 64,
    "title": "Estilo Streetwear Premium",
    "category": "Masculino",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato premium de estilo streetwear, vibe minimalista e clean, capturado com teleobjetiva 135mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-64.jpg",
    "attachments": [
      {
        "id": "64-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-64-ref-1.jpg"
      }
    ]
  },
  {
    "id": 65,
    "title": "Beleza Natural Contemplativo",
    "category": "Feminino",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato contemplativo de beleza natural, tom dramático e misterioso, capturado com lente 85mm f/1.4 e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-65.jpg",
    "attachments": []
  },
  {
    "id": 66,
    "title": "Ensaio na Praia Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato clássico de ensaio na praia, atmosfera intimista, capturado com lente 50mm f/1.8 e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-66.jpg",
    "attachments": []
  },
  {
    "id": 67,
    "title": "Textura Realista Moderno",
    "category": "Ultrarrealista",
    "tags": [
      "close-up",
      "cinematográfico",
      "ultrarrealista"
    ],
    "prompt": "Retrato moderno de textura realista, clima editorial de revista, capturado com lente 35mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-67.jpg",
    "attachments": [
      {
        "id": "67-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-67-ref-1.jpg"
      },
      {
        "id": "67-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-67-ref-2.jpg"
      }
    ]
  },
  {
    "id": 68,
    "title": "Herói Mirim Editorial",
    "category": "Crianças Heróis",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato editorial de herói mirim, estética cinematográfica, capturado com grande angular 24mm e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-68.jpg",
    "attachments": []
  },
  {
    "id": 69,
    "title": "Café da Manhã Cinematográfico",
    "category": "Lanches",
    "tags": [
      "produto",
      "retrato",
      "preto e branco"
    ],
    "prompt": "Retrato cinematográfico de café da manhã, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-69.jpg",
    "attachments": []
  },
  {
    "id": 70,
    "title": "Cena de Produto Dramático",
    "category": "Anúncios",
    "tags": [
      "lifestyle",
      "moda",
      "colorido"
    ],
    "prompt": "Retrato dramático de cena de produto, tom dramático e misterioso, capturado com lente 85mm f/1.4 e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-70.jpg",
    "attachments": [
      {
        "id": "70-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-70-ref-1.jpg"
      }
    ]
  },
  {
    "id": 71,
    "title": "Executivo de Terno Minimalista",
    "category": "Masculino",
    "tags": [
      "cinematográfico",
      "estúdio",
      "close-up"
    ],
    "prompt": "Retrato minimalista de executivo de terno, atmosfera intimista, capturado com lente 50mm f/1.8 e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-71.jpg",
    "attachments": []
  },
  {
    "id": 72,
    "title": "Editorial Elegante Luxuoso",
    "category": "Feminino",
    "tags": [
      "editorial",
      "externa",
      "corpo inteiro"
    ],
    "prompt": "Retrato luxuoso de editorial elegante, clima editorial de revista, capturado com lente 35mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-72.jpg",
    "attachments": []
  },
  {
    "id": 73,
    "title": "Sessão ao Ar Livre Vibrante",
    "category": "Ensaio Fotográfico",
    "tags": [
      "retrato",
      "preto e branco",
      "produto"
    ],
    "prompt": "Retrato vibrante de sessão ao ar livre, estética cinematográfica, capturado com grande angular 24mm e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-73.jpg",
    "attachments": [
      {
        "id": "73-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-73-ref-1.jpg"
      },
      {
        "id": "73-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-73-ref-2.jpg"
      }
    ]
  },
  {
    "id": 74,
    "title": "Detalhe Fotográfico Sofisticado",
    "category": "Ultrarrealista",
    "tags": [
      "moda",
      "colorido",
      "ultrarrealista"
    ],
    "prompt": "Retrato sofisticado de detalhe fotográfico, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz natural de janela. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-74.jpg",
    "attachments": []
  },
  {
    "id": 75,
    "title": "Capa e Máscara Urbano",
    "category": "Crianças Heróis",
    "tags": [
      "estúdio",
      "close-up",
      "cinematográfico"
    ],
    "prompt": "Retrato urbano de capa e máscara, tom dramático e misterioso, capturado com lente 85mm f/1.4 e softbox de estúdio. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-75.jpg",
    "attachments": []
  },
  {
    "id": 76,
    "title": "Hambúrguer Gourmet Noturno",
    "category": "Lanches",
    "tags": [
      "externa",
      "corpo inteiro",
      "editorial"
    ],
    "prompt": "Retrato noturno de hambúrguer gourmet, atmosfera intimista, capturado com lente 50mm f/1.8 e luz suave difusa. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-76.jpg",
    "attachments": [
      {
        "id": "76-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-76-ref-1.jpg"
      }
    ]
  },
  {
    "id": 77,
    "title": "Campanha de Marca Golden Hour",
    "category": "Anúncios",
    "tags": [
      "preto e branco",
      "produto",
      "retrato"
    ],
    "prompt": "Retrato golden hour de campanha de marca, clima editorial de revista, capturado com lente 35mm e iluminação dramática lateral. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-77.jpg",
    "attachments": []
  },
  {
    "id": 78,
    "title": "Retrato Casual Premium",
    "category": "Masculino",
    "tags": [
      "colorido",
      "lifestyle",
      "moda"
    ],
    "prompt": "Retrato premium de retrato casual, estética cinematográfica, capturado com grande angular 24mm e golden hour quente. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-78.jpg",
    "attachments": []
  },
  {
    "id": 79,
    "title": "Lifestyle Casual Contemplativo",
    "category": "Feminino",
    "tags": [
      "close-up",
      "cinematográfico",
      "estúdio"
    ],
    "prompt": "Retrato contemplativo de lifestyle casual, vibe minimalista e clean, capturado com teleobjetiva 135mm e luz de neon ciano e magenta. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-79.jpg",
    "attachments": [
      {
        "id": "79-1",
        "alt": "Referência 1",
        "image": "/imagens/referencias/prompt-79-ref-1.jpg"
      },
      {
        "id": "79-2",
        "alt": "Referência 2",
        "image": "/imagens/referencias/prompt-79-ref-2.jpg"
      }
    ]
  },
  {
    "id": 80,
    "title": "Retrato Artístico Clássico",
    "category": "Ensaio Fotográfico",
    "tags": [
      "corpo inteiro",
      "editorial",
      "externa"
    ],
    "prompt": "Retrato clássico de retrato artístico, tom dramático e misterioso, capturado com lente 85mm f/1.4 e chiaroscuro de alto contraste. Composição cuidadosa, cores ricas e profundidade de campo rasa, fundo desfocado com bokeh suave. Qualidade fotográfica profissional, 4k, altamente detalhado, foco nítido nos olhos. --ar 3:4 --style raw",
    "image": "/imagens/capas/prompt-80.jpg",
    "attachments": []
  }
]
