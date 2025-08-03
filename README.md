# 🔮 O Mentalista v1.0

Uma aplicação web moderna de mentalismo que simula a leitura mental através de uma experiência interativa e envolvente. Este projeto frontend de entretenimento é **100% funcional** e utiliza técnicas psicológicas e matemáticas para criar uma ilusão convincente de leitura mental, proporcionando uma experiência imersiva e divertida para os usuários.

## ✨ Características

- **Interface Moderna**: Desenvolvida com React 18 e Vite para máxima performance
- **Animações Fluidas**: Powered by Framer Motion para transições suaves
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema Dark Elegante**: Interface sofisticada com tema escuro profissional
- **Experiência Imersiva**: 5 etapas cuidadosamente projetadas para máximo engajamento
- **Paginação Inteligente**: Sistema de navegação otimizado para dificultar a identificação de padrões
- **UX/UI Refinada**: Botões com gradientes, efeitos hover e design moderno
- **Deploy Automático**: Configurado para GitHub Pages, Netlify e Vercel
- **100% Funcional**: Aplicação completa e pronta para uso em produção

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **CSS3** - Estilização avançada

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/davidassef/OMentalista.git

# Entre no diretório
cd OMentalista

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
   - URL de acesso: https://davidassef.github.io/OMentalista/

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

A aplicação guia o usuário através de uma experiência de mentalismo em 5 etapas:

1. **Boas-vindas**: Introdução envolvente à experiência de leitura mental
2. **Pensamento**: Usuário escolhe mentalmente um número de 10-99
3. **Canalização**: Processo de concentração mental com animações imersivas
4. **Tabela de Símbolos**: Interface paginada (15 itens por página) onde o usuário encontra e memoriza um símbolo específico
5. **Revelação**: O "mentalista" revela magicamente o símbolo pensado

### 🧠 A Magia por Trás
A aplicação utiliza princípios matemáticos baseados em múltiplos de 9 combinados com um algoritmo sofisticado de distribuição de símbolos. O sistema gera símbolos únicos para cada múltiplo de 9 e os replica estrategicamente em números aleatórios da mesma página (faixa de 10 números), criando exatamente duas ocorrências do mesmo símbolo por página. Esta abordagem torna o padrão matemático praticamente imperceptível, proporcionando uma experiência verdadeiramente mágica de leitura mental.

## 🆕 Melhorias Recentes

### Algoritmo de Geração de Símbolos Aprimorado
- **Repetição Estratégica por Página**: Cada múltiplo de 9 recebe um símbolo único que se repete exatamente uma vez em um número aleatório da mesma faixa de 10 números
- **Mascaramento de Padrões**: Sistema inteligente que dificulta a identificação do padrão matemático subjacente
- **Distribuição Otimizada**: Algoritmo que garante duas ocorrências precisas do mesmo símbolo por página, tornando o truque mais convincente
- **Símbolos Únicos**: Cada múltiplo de 9 possui seu próprio símbolo, eliminando repetições desnecessárias

### Interface da Tabela de Símbolos
- **Paginação Reorganizada**: Indicadores numéricos no topo e botões de navegação na base
- **Design Moderno**: Botões com gradientes, bordas elegantes e efeitos hover/active
- **Otimização Estratégica**: Redução de 20 para 15 itens por página para aumentar a dificuldade
- **Responsividade Aprimorada**: Layout otimizado para tablets (768px) e smartphones (480px)
- **UX Refinada**: Remoção de ícones desnecessários para um design mais limpo

### Experiência do Usuário
- **Navegação Intuitiva**: Separação clara entre indicadores de página e controles de navegação
- **Feedback Visual**: Efeitos shimmer e transições suaves nos botões
- **Acessibilidade**: Estados disabled bem definidos e contraste adequado
- **Performance**: Animações otimizadas e carregamento rápido
- **Algoritmo Imperceptível**: Lógica matemática completamente mascarada pela interface intuitiva

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
