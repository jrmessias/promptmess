// Dados de exemplo (placeholder). Substitua `image` pela URL/caminho da sua imagem.
// Cada item: { id, title, image, category, tags[], prompt }
//
// Níveis de acesso (sem nenhum campo = grátis e público):
//  - `premium: true`     → só usuário logado E premium vê o texto.
//  - `requiresLogin: true` → só usuário logado (qualquer plano) vê o texto.
//
// ATENÇÃO: este é um site estático — todo texto deste arquivo é enviado ao
// navegador e fica visível no dev console. NÃO coloque o texto real de prompts
// premium aqui. Deixe `prompt: ""` nos premium; a interface exibe um lorem
// ipsum no lugar. Entregue o conteúdo real ao cliente por outro meio.
// Nos itens `requiresLogin`, o texto real PODE ficar aqui (o bloqueio é apenas
// um incentivo ao cadastro, não proteção de conteúdo).

// TODO: trocar pelo link real de compra/assinatura
export const PREMIUM_URL = "#"

// Texto fictício exibido (ofuscado) no lugar do prompt em itens premium.
export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. --ar 3:4 --style raw"

export const prompts = [
  {
    "id": 1,
    "premium": false,
    "title": "Mulher e cavalo",
    "category": "Feminino",
    "tags": [
      "animal",
      "preto e branco",
    ],
    "prompt": "Crie um retrato em 8K ultra-realista, em preto e branco cinematográfico, com estética editorial fine art minimalista e atmosfera intensa, melancólica e sofisticada. Estou sentada exatamente no centro da composição, em uma cadeira simples de madeira posicionada sobre um terreno árido e seco, coberto por terra rachada e pedras pequenas, em um campo vazio e infinito. Atrás de mim, perfeitamente alinhado ao meu corpo, há um grande cavalo preto de porte imponente, parado de frente para a câmera, extremamente próximo, criando uma composição visual poderosa e simétrica. O cavalo ocupa quase toda a altura da cena, com pelagem preta brilhante, musculatura forte, textura dos pelos extremamente detalhada, crina longa e escura caindo sobre os olhos, arreio preto fosco minimalista e expressão calma porém dominante.\n" +
        "Minha pose é rígida, estática e absolutamente simétrica, transmitindo presença, silêncio e autoridade. Estou sentada com as pernas abertas em ângulo natural, os pés firmemente apoiados no chão, levemente afastados, usando botas pretas de couro liso com acabamento fosco. Meus braços descansam naturalmente entre as pernas, com as mãos relaxadas segurando delicadamente cordas pretas grossas posicionadas sobre a cadeira. Minha coluna está reta, os ombros alinhados e o corpo completamente voltado para frente.\n" +
        "Meu rosto possui uma expressão fria, neutra e hipnotizante, sem sorriso, com olhar fixo diretamente para a câmera. Minha pele apresenta textura extremamente realista, poros naturais visíveis, micro detalhes autênticos, leve suavidade cinematográfica e acabamento editorial sofisticado. Meus cabelos são longos, volumosos e ondulados, com ondas suaves e definidas caindo perfeitamente pelos ombros, com textura sedosa extremamente detalhada e movimento natural causado pelo vento leve do ambiente.\n" +
        "Estou usando um terno preto oversized de alfaiataria premium, extremamente elegante e minimalista. O blazer possui tecido de lã fria encorpada com textura fosca refinada, caimento estruturado e lapelas clássicas discretas. A calça social preta possui modelagem reta, tecido pesado e sofisticado com leves vincos naturais extremamente detalhados. O figurino inteiro transmite luxo silencioso, estética old money e editorial de moda contemporânea.\n" +
        "O ambiente deve parecer vasto, vazio e silencioso, com horizonte aberto e céu branco acinzentado totalmente estourado pela luz difusa, criando um contraste dramático entre o fundo claro e os elementos escuros da composição. O chão seco precisa apresentar textura hiper detalhada, com rachaduras, pedras, poeira e profundidade realista. A fotografia deve transmitir sensação de solidão, força feminina, mistério e conexão simbólica entre humano e animal.\n" +
        "A iluminação deve ser natural, suave e cinematográfica, como um dia nublado com luz difusa espalhada uniformemente pelo cenário, criando sombras delicadas e realistas. Contraste refinado em preto e branco, pretos profundos, brancos suaves e ampla faixa dinâmica. Profundidade de campo realista com foco extremamente preciso em mim e no cavalo, mantendo o fundo levemente desfocado de forma natural.\n" +
        "Capturado com uma DSLR full frame Canon EOS R5, lente 85 mm f/1.8 para detalhes ultra nítidos, texturas de pele e superfícies extremamente detalhadas, iluminação natural e cinematográfica, profundidade de campo realista, shot on 35mm lens. Ultra photorealistic, hyper detailed skin texture, realistic fabric textures, cinematic monochrome grading, editorial fashion photography, fine art composition, natural imperfections, realistic anatomy, ultra sharp focus, realistic horse anatomy, museum-quality portrait, masterpiece photography, volumetric atmosphere, realistic grain, premium cinematic realism.",
    "image": "/imagens/capas/prompt-1.png",
    "attachments": [

    ]
  },
  {
    "id": 2,
    "premium": false,
    "title": "Foto fashion",
    "category": "Feminino",
    "tags": [
      "moda",
      "óculos",
      "lifestyle"
    ],
    "prompt": "Configuração Técnica: Uma fotografia de retrato ultra detalhada, com resolução nativa de 8K, capturada com uma câmera full-frame Canon EOS R5 e uma lente Canon RF 85 mm f/1.8. A imagem deve ser renderizada com nitidez extrema e realismo fotográfico bruto, indistinguível de uma foto real, mesmo sob zoom e análise detalhada.\n" +
        "Sujeito e Pose: Um close-up (retrato de busto) da mulher com cabelos em duas tranças de raiz (cornrows) puxadas para trás e duas franjas soltas na frente. Ela está voltada diretamente para a câmera, com a cabeça ligeiramente inclinada para baixo. O olhar é intenso e direto, olhando por cima da borda dos óculos. A pose é idêntica à da referência.\n" +
        "Expressão e Rosto: Uma expressão neutra, penetrante e ligeiramente desafiadora. Os lábios são preenchidos e de cor natural, rosado fosco. Os olhos são brilhantes. A textura da pele deve ser crua e natural, com poros visíveis, pequenas imperfeições de pele, pêlos faciais finos, textura natural da derme, evitando totalmente a pele 'perfeita' ou 'suavizada'. As sobrancelhas são preenchidas naturalmente.\n" +
        "Acessórios: Ela usa os óculos de sol sem armação e ovais com lentes âmbar/laranja, apoiados mais abaixo no nariz.  Um pequeno brinco de stud ou argola é visível na orelha esquerda.\n" +
        "Roupa: Uma Blazer de alfaiataria laranja, estruturado, tecido de qualidade visivel, com decote em V profundo.\n" +
        "Ambiente e Iluminação: O fundo é um preto profundo e impenetrável. A iluminação é cinematográfica, direcional e dura, proveniente de uma única fonte de luz de ângulo baixo para a direita (como uma lanterna ou ponto de luz direcional), criando sombras fortes e definidas no rosto (no contorno do nariz, sob o queixo) e destacando as texturas da pele e dos óculos. Há um brilho quente e suave no cabelo e nos óculos. A luz é dura e imperdoável, não suave ou de estúdio.\n" +
        "Detalhes de Superfície: Sob zoom, a textura do metal das correntes e óculos deve ter micro-riscos e desgaste natural. A fibra do tecido da regata é nítida. Os fios individuais de cabelo nas tranças e na franja são renderizados com clareza extraordinária. O material das lentes dos óculos tem clareza e reflexos mínimos e naturais.\n" +
        "Profundidade de Campo: Uma profundidade de campo incrivelmente rasa devido à abertura f/1.8, tornando os olhos e o centro do rosto nítidos como navalha, a parte de trás do cabelo se misturam suavemente no preto profundo.\n" +
        "Estilo Visual: Uma estética de foto de filme granulado de 35mm (embora capturada digitalmente), com granulação autêntica e natural. A sensação é crua e imediata, como um snapshot de rua ou de noite autêntico, não uma pose de estúdio.\n" +
        "Evitar Totalmente: Aparência de estúdio, iluminação suave, suavização de pele, imperfeições corrigidas, pose de 'influencer' ensaiada, renderização 3D, arte digital, estética de IA, filtros de beleza. A imagem deve ser crua e autêntica.\n",
    "image": "/imagens/capas/prompt-2.png",
    "attachments": []
  },
  {
    "id": 3,
    "requiresLogin": false,
    "title": "Foto Preto & Branco",
    "category": "Selfie",
    "tags": [
      "estúdio",
      "close-up",
      "peb"
    ],
    "prompt": "Usando a foto de referência, use meu rosto e Crie um retrato em preto e branco de alta qualidade com iluminação dramática e contraste forte. O fundo deve ser completamente preto, destacando apenas o rosto e parte do tronco da pessoa. Veste uma camisa com gola e está com uma expressão séria e intensa. A luz deve vir de um ângulo lateral ou superior, criando sombras marcantes que realçam os traços faciais. O estilo deve lembrar fotografia de estúdio com foco artístico e emocional, transmitindo profundidade e introspecção.",
    "image": "/imagens/capas/prompt-3.png",
    "attachments": []
  },
  {
    "id": 4,
    "title": "Retrato perfil",
    "category": "Selfie",
    "tags": [
      "4k",
      "4:3",
      "perfil"
    ],
    "prompt": "Premium cinematic lifestyle portrait in vertical 4:5 aspect ratio, outdoors beneath a clean, rich blue sky with no distracting elements. Replace the subject with the uploaded reference character, precisely preserving their real facial structure, hairstyle and hair volume, skin tone, jawline, nose shape, lips, body proportions, age appearance, and natural identity. Low-angle close-up from behind and slightly to the side, the character positioned slightly off-center with shoulder and back partially visible; head turned into a crisp side-profile while looking away into the distance. Strong warm sunlight from the side creates realistic highlights and specular reflections across face, hair, and any premium sunglasses (only if they naturally match the reference character’s style). Outfit updated to fit the reference character’s personality: a high-end textured knit/striped sweater, cardigan, casual jacket, or layered streetwear piece with tailored fit, premium fabric weave, and subtle patterning, maintaining an editorial luxury feel. Emphasize lifelike skin pores, fine hair strands, fabric texture, cinematic shadows, warm highlights, and natural movement. Shot on a 50mm lens, shallow depth of field, sharp focus, professional photography, masterful composition, warm cinematic color grading, film photography look, photorealistic, hyperrealistic, ultra high definition, highly detailed, 8K resolution, Instagram-ready.\n" +
        "\n" +
        "NEGATIVE PROMPT: text, logo, watermark, blurry face, wrong face, deformed sunglasses, bad anatomy, distorted ears, extra limbs, messy hair artifacts, plastic skin, fake fabric texture, oversharpened image, unrealistic lighting, cartoon, CGI, duplicate person, low resolution, unnatural pose, distorted background, overexposed sky",
    "image": "/imagens/capas/prompt-4.png",
  },
  {
    "id": 5,
    "title": "Indor Selfie",
    "category": "Selfie",
    "tags": [
      "gestos",
    ],
    "prompt": "A highly realistic cinematic selfie-style photo of a young woman in a cozy indoor setting. She has long dark brown hair styled in a loose messy bun with soft strands falling around her face, natural facial features, medium tan skin tone, realistic skin texture with slight imperfections, and minimal makeup. She is wearing a slightly oversized dark graphic t-shirt with a vintage print. She is holding the camera at arm’s length while making a peace sign with her fingers and a playful pout expression, looking directly into the camera. The lighting is natural window light coming from the side, casting soft shadows and highlights on her face. The background is a minimal modern room with soft neutral tones and slightly blurred details. Shot like a real smartphone selfie but with DSLR realism, 35mm lens look, ultra realistic, high detail, natural color grading.\n" +
        "Character Detail Booster\n" +
        "same face, consistent identity, natural brunette, realistic skin texture, visible pores, soft imperfections\n" +
        "Outfit Detail Booster\n" +
        "oversized graphic t-shirt, vintage print, soft fabric folds, casual home style\n" +
        "Camera Booster\n" +
        "selfie angle, arm extended, slight wide perspective, natural framing, handheld feel\n" +
        "Lighting Booster\n" +
        "window light, soft shadows, natural highlights, warm indoor daylight\n" +
        "Negative Prompt\n" +
        "different face, identity change, plastic skin, beauty filter look, CGI, distorted hand, bad anatomy, blur",
    "image": "/imagens/capas/prompt-5.png",
    "attachments": []
  },
  {
    "id": 6,
    "title": "Golden Hour",
    "category": "Selfie",
    "tags": [
      "sol",
      "felicidade",
    ],
    "prompt": "portrait of a young woman with long straight dark brown hair, warm skin tone, expressive brown eyes, delicate facial features, laughing naturally with a bright joyful smile, slightly messy wind-blown hair, wearing a casual oversized sweatshirt, sitting on a sandy beach during sunset, golden hour lighting, dramatic orange and red sky, sun near the horizon over the ocean, candid moment, relaxed posture, playful energy, cinematic composition, shallow depth of field, 85mm lens, ultra realistic, warm tones, photorealistic ",
    "image": "/imagens/capas/prompt-6.png",
    "attachments": []
  },
  {
    "id": 7,
    "title": "Relaxing moment",
    "category": "Selfie",
    "tags": [
      "jardim",
      "cerejeira",
    ],
    "prompt": "portrait of a young woman with long straight dark brown hair, warm skin tone, expressive brown eyes, delicate facial features, soft serious expression, slightly looking away thoughtfully, calm and elegant mood, wearing a light white blouse, standing beside a tree with pink cherry blossoms, spring atmosphere, soft sunlight filtering through flowers, gentle pose with hand near face, dreamy background, shallow depth of field, cinematic lighting, ultra realistic, soft pastel colors, 85mm lens, photorealistic ",
    "image": "/imagens/capas/prompt-7.png",
  },
  {
    "id": 8,
    "title": "Airport Selfie",
    "category": "Selfie",
    "tags": [
      "aeroporto",
      "golden hour",
      "liberdade"
    ],
    "prompt": "A highly realistic cinematic photo of a young woman standing on an airport runway during sunset. She has long dark brown hair flowing in the wind. She is wearing a white t-shirt, white shorts, and an oversized denim jacket. Her arms are spread wide and she has an excited energetic expression with a bright open smile, expressing freedom and joy. A large airplane is flying overhead. Shot like a DSLR photo, 35mm lens, cinematic color grading. Scene Booster airplane, runway, sunset sky Outfit Detail Booster denim jacket, natural folds Negative Prompt fake airplane, unrealistic lighting",
    "image": "/imagens/capas/prompt-8.png",
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
    "prompt": "A highly realistic cinematic lifestyle photo of a young woman sitting at a cozy outdoor cafe. She has long dark brown hair styled naturally, soft facial features, and realistic skin texture with subtle imperfections. She is wearing a fitted black off-shoulder top and high-waisted black jeans, accessorized with a minimal necklace and a smartwatch. She is sitting in a relaxed posture, slightly angled to the side, looking away from the camera with a natural smile, her lips clearly curved into a soft visible smile (not exaggerated), expressing warmth and happiness. Her gaze is directed off to the side, creating a candid and unposed moment. Her face is relaxed, with gentle cheeks lift and natural emotion. The environment features a modern cafe setting with wooden tables, glass windows, greenery, and soft reflections. Natural daylight creates balanced cinematic lighting with soft shadows and highlights. Background is slightly blurred with depth of field, giving a DSLR-style aesthetic. Shot like a DSLR photo, 50mm lens, f/1.8, ultra realistic, high detail, natural color grading." +
        "Character Detail Booster same face, consistent identity, natural brunette, realistic skin texture 🔥 Outfit Detail Booster off-shoulder black top, fitted fabric, natural folds" +
        "Environment Booster outdoor cafe, greenery, wooden table, glass reflections Expression Booster looking away, smiling face, visible smile, soft happy expression, candid moment Negative Prompt direct eye contact, no smile, serious face, exaggerated grin, plastic skin, CGI look",
    "image": "/imagens/capas/prompt-9.png",
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
    "prompt": "A highly realistic cinematic lifestyle photo of a young woman sitting in a cozy modern cafe. She has long dark brown hair, natural facial features, and realistic skin texture. She is resting her chin on her hand and smiling with a gentle visible smile, slightly more pronounced but still natural and relaxed, with softly lifted cheeks and warm expression, looking comfortably toward the camera. She is wearing a stylish casual jacket with subtle embroidery details. In front of her is a table with a drink glass and cafe elements. The environment features warm ambient lighting, decorative interior, plants, and soft bokeh lights in the background. Lighting is warm and cinematic with balanced highlights and soft shadows. Depth of field creates a smooth background blur. Shot like a DSLR photo, 85mm lens, f/1.8, ultra realistic, high detail. 🔥 Outfit Detail Booster casual jacket, embroidered details, natural fabric folds ☕ Environment Booster cozy cafe, warm lighting, bokeh lights, modern interior 🎥 Expression Booster gentle visible smile, slightly lifted cheeks, warm happy expression, natural emotion 🚫 Negative Prompt exaggerated smile, wide grin, fake expression, plastic skin, unrealistic lighting",
    "image": "/imagens/capas/prompt-10.png",
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
    "prompt": "A highly realistic cinematic travel photo of a young woman taking a selfie in front of the Eiffel Tower in Paris. She has long dark brown hair styled naturally, soft facial features, and realistic skin texture. She is wearing a cozy red knitted sweater with a matching hair bow, smiling softly with a gentle relaxed expression while looking slightly upward. The background shows Parisian architecture with the Eiffel Tower clearly visible. Lighting is soft natural daylight with a slightly overcast sky, creating balanced cinematic tones. Depth of field keeps her in sharp focus while softly blurring the background. Shot like a DSLR photo, 50mm lens, ultra realistic, travel photography style. 🔥 Outfit Detail Booster knitted sweater, textured fabric, cozy winter style 🌍 Environment Booster Eiffel Tower, Paris street, European architecture 🚫 Negative Prompt fake landmark, distorted tower, CGI look, oversaturated colors",
    "image": "/imagens/capas/prompt-11.png",
    "attachments": []
  },
  {
    "id": 12,
    "title": "Ultra realista",
    "category": "Perfil",
    "tags": [
      "exposure",
      "camera"
    ],
    "prompt": "Ultra-realistic cinematic alter ego portrait of a young person standing alone inside a dark atmospheric environment flooded with deep crimson red light and thick volumetric smoke. The scene should feel like a visual representation of internal conflict, duality, identity, memory, and hidden emotions. The primary subject stands perfectly sharp in the foreground while a second version of the same person appears behind them as a ghostly motion-blurred silhouette, creating the illusion of an alternate self existing in another dimension.\n" +
        "The sharp subject should be photographed with premium fashion-editorial quality, wearing oversized black streetwear, minimal accessories, and maintaining a calm, mysterious expression. Their pose should feel natural yet powerful, with subtle confidence and emotional depth. Skin texture must remain highly realistic with visible pores, natural imperfections, detailed eyes, authentic facial shadows, and cinematic realism. The subject should not smile. Their gaze should feel intense, detached, and introspective, as if they are confronting another version of themselves.\n" +
        "Behind the main figure, a blurred duplicate of the same person emerges through the smoke. This alter ego should appear created through realistic long-exposure motion blur rather than digital effects. The blurred figure should stretch horizontally as if moving rapidly through space and time, creating an unsettling but beautiful visual contrast between stillness and motion. The effect must feel organic, realistic, and emotionally symbolic, representing hidden thoughts, alternate realities, memories, or an inner shadow.\n" +
        "The environment should be completely immersed in dense red atmospheric fog illuminated by powerful backlights hidden within the smoke. Deep crimson, scarlet, and dark ember tones dominate the color palette while preserving rich blacks throughout the frame. Volumetric lighting should wrap around the figures, creating glowing edges and subtle separation from the background. The smoke should feel alive and cinematic, swirling naturally around the subjects while catching the red light in dramatic ways.\n" +
        "Composition should follow luxury fashion campaign standards with perfect visual balance and strong negative space. The background remains minimal and uncluttered so the focus stays entirely on the interaction between the sharp subject and their blurred alter ego. Every frame should feel like a premium album cover, psychological thriller movie poster, luxury fragrance campaign, or award-winning editorial photograph.\n" +
        "Shot on a professional full-frame cinema camera using an 85mm lens, shallow depth of field, realistic optical compression, ultra-detailed textures, cinematic dynamic range, realistic shadow falloff, premium color grading, subtle film grain, soft diffusion, volumetric smoke simulation, dramatic red backlighting, photorealistic skin rendering, luxury fashion photography aesthetics, psychological storytelling, emotional atmosphere, masterpiece composition, hyper-realistic lighting, 8K ultra-detail, award-winning portrait photography, Oscar-worthy visual direction.",
    "image": "/imagens/capas/prompt-12.png",
    "attachments": []
  },
  {
    "id": 13,
    "title": "Óculos escuro",
    "category": "Perfil",
    "tags": [
      "retrato",
      "vermelho",
    ],
    "prompt": "Ultra-realistic cinematic studio portrait of the reference person (I SHARED THE IMAGE), dark luxury aesthetic, centered male subject wearing matte black sunglasses and black textured sweater, sharp jawline, trimmed beard, soft confident expression, deep black shadows, intense red rim lighting glowing around hair and shoulders, dramatic red gradient background fading into black, moody low-key lighting, ultra detailed skin texture, premium editorial fashion photography, symmetrical composition, shallow depth of field, soft diffused key light from front, neon red edge glow, high contrast, rich blacks, minimal clean background, modern masculine vibe, luxury Instagram post style, hyper-realistic, DSLR quality, 85mm lens, f/1.8, cinematic color grading, crisp focus on face, studio-quality retouching, realistic reflections on sunglasses, subtle film grain, photorealistic, 8k, vertical portrait composition --ar 3:4 --style raw --v 6.IMAGE SIZE SHOULD BE 1080X1350",
    "image": "/imagens/capas/prompt-13.png",
  },
    {
      "id": 14,
      "title": "Restauração de foto",
      "category": "Foto",
      "tags": [
        "foto",
        "restauração",
      ],
      "prompt": "Enhance the portrait while strictly preserving the subject's identity with accurate facial geometry. Do not change their expression or face shape. Only allow subtle feature cleanup without altering who they are. Keep the exact same background from the reference image. No replacements, no changes, no new objects, no layout shifts. The environment must look identical. The image must be recreated as if it was shot on a Sony A1, using an 85mm f1.4 lens, at f1.6, ISO 100, 1/200 shutter speed, cinematic shallow depth of field, perfect facial focus, and an editorial-neutral color profile. This Sony A1 + 85mm f1.4 setup is mandatory. The final image must clearly look like premium full-frame Sony A1 quality. Lighting must match the exact direction, angle, and mood of the reference photo. Upgrade the lighting into a cinematic, subject-focused style: soft directional light, warm highlights, cool shadows, deeper contrast, expanded dynamic range, micro-contrast boost, smooth gradations, and zero harsh shadows. Maintain neutral premium color tone, cinematic contrast curve, natural saturation, real skin texture (not plastic), and subtle film grain. No fake glow, no runway lighting, no over smoothing. Render in 4K resolution, 10-bit color, cinematic editorial style, premium clarity, portrait crop, and keep the original environmental vibe untouched. Re-render the subject with improved realism, depth, texture, and lighting while keeping identity and background fully preserved. NEGATIVE INSTRUCTIONS: No new background. No background change. No overly dramatic lighting. No face morphing. No fake glow. No flat lighting. No over-smooth skin.",
      "image": "/imagens/capas/prompt-14.png",
      "credit": {
        "site": "Nome do Site",
        "url": "https://exemplo.com"
      },
      "attachments": [
        {
          "id": "1-1",
          "alt": "Referência 1",
          "image": "/imagens/referencias/prompt-14-ref-1.jpeg"
        },
      ]
    }
]

// Categorias do filtro, geradas automaticamente a partir dos prompts.
// "Todos" sempre primeiro; as demais na ordem de primeira aparição nos dados.
export const categories = [
  "Todos",
  ...Array.from(new Set(prompts.map((p) => p.category).filter(Boolean))),
]
