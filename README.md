# 🔮 O Mentalista v1.0

Uma aplicação web moderna de mentalismo que simula a leitura mental através de uma experiência interativa e envolvente. O projeto utiliza técnicas psicológicas e matemáticas para criar uma ilusão convincente de leitura mental.

## ✨ Características

- **Interface Moderna**: Desenvolvida com React 18 e Vite
- **Animações Fluidas**: Powered by Framer Motion
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Tema Dark**: Interface elegante com tema escuro
- **Experiência Imersiva**: 5 etapas guiadas para uma experiência completa
- **Deploy Automático**: Configurado para GitHub Pages, Netlify e Vercel

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **CSS3** - Estilização avançada

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/davidassef/omentalista.git

# Entre no diretório
cd omentalista

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

## 🏗️ Build e Deploy

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# Testar build localmente
npm run preview
```

### Deploy no Netlify

1. **Via Netlify CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

2. **Via Interface Web:**
   - Acesse [netlify.com](https://netlify.com)
   - Conecte seu repositório GitHub
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy automático será configurado

### Deploy no Vercel

1. **Via Vercel CLI:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login no Vercel
vercel login

# Deploy
vercel --prod
```

2. **Via Interface Web:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub
   - Deploy automático será configurado

### Deploy no GitHub Pages

1. **Configurar GitHub Actions:**
   - Crie `.github/workflows/deploy.yml` (já configurado)
   - Configure o workflow para build e deploy (já configurado)
   - Ative GitHub Pages nas configurações do repositório
   - URL de acesso: https://davidassef.github.io/omentalista/

### Deploy Manual (Servidor Próprio)

```bash
# Gerar build
npm run build

# Copiar conteúdo da pasta 'dist' para seu servidor web
# Configurar servidor para servir index.html para todas as rotas (SPA)
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── steps/          # Componentes das etapas do jogo
│   │   ├── WelcomeStep.jsx
│   │   ├── ThinkNumberStep.jsx
│   │   ├── CalculationStep.jsx
│   │   ├── SymbolTableStep.jsx
│   │   └── RevealStep.jsx
│   └── ui/             # Componentes de interface
│       ├── Background.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       └── StepIndicator.jsx
├── hooks/
│   └── useMentalismGame.js  # Lógica principal do jogo
├── styles/
│   ├── App.css
│   └── global.css
├── App.jsx
└── main.jsx
```

## 🎮 Como Funciona

1. **Boas-vindas**: Introdução à experiência
2. **Pensamento**: Usuário pensa em um número de 10-99
3. **Canalização**: Processo de concentração mental
4. **Tabela de Símbolos**: Usuário encontra e memoriza um símbolo
5. **Revelação**: O "mentalista" revela o símbolo pensado

## 🔧 Configurações de Deploy

### Netlify (`netlify.toml`)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel (`vercel.json`)
```json
{
  "version": 2,
  "builds": [{
    "src": "package.json",
    "use": "@vercel/static-build",
    "config": { "distDir": "dist" }
  }],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🎨 Personalização

### Cores (CSS Variables)
```css
:root {
  --color-primary: #8B5CF6;
  --color-background: #0F172A;
  --color-surface: #1E293B;
  --color-text-primary: #F8FAFC;
}
```

### Símbolos
Os símbolos podem ser personalizados no arquivo `src/hooks/useMentalismGame.js`:

```javascript
const allSymbols = [
  '🌟', '🌙', '☀️', '❤️', '🔥', '💎', // Adicione seus símbolos aqui
]
```

## 🐛 Solução de Problemas

### Build Falha
- Verifique se todas as dependências estão instaladas: `npm install`
- Limpe o cache: `npm run build -- --force`

### Deploy não Funciona
- Verifique se o arquivo de configuração está correto
- Confirme se a pasta `dist` foi gerada corretamente
- Verifique os logs de build na plataforma de deploy

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

---

**Desenvolvido com ❤️ usando React e Vite**
