# Convite Digital — Encontro CCB Jardim Olga

Convite digital desenvolvido em **React + Vite** com servidor **Node.js + Express**, pensado para compartilhamento no WhatsApp e visualização em dispositivos móveis e computadores.

## Estrutura do Projeto

```text
encontro-ccb/
├── index.html                  # Entrada Vite com SEO e Open Graph
├── package.json
├── vite.config.js              # Configuração Vite e proxy /api -> Express
├── server.js                   # Servidor Express (API + dist/)
├── server/
│   ├── config/event.js         # Dados do evento no backend
│   ├── routes/calendar.js      # Rota GET /api/calendar.ics
│   └── utils/icsGenerator.js   # Gerador iCalendar (RFC 5545)
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-bg.jpg
│       └── og-image.jpg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── data/eventData.js       # Fonte única de dados do evento
    ├── pages/HomePage.jsx
    ├── components/
    │   ├── HeroSection.jsx
    │   ├── CountdownSection.jsx
    │   ├── MessageSection.jsx
    │   ├── EventDetailsSection.jsx
    │   ├── CalendarMenu.jsx
    │   ├── LocationSection.jsx
    │   ├── ShareWhatsAppSection.jsx
    │   └── Footer.jsx
    ├── utils/
    │   ├── countdown.js
    │   └── shareCardCanvas.js
    └── styles/
        ├── index.css
        └── animations.css
```

## Requisitos

- Node.js 18+ (testado com Node.js v24)

## Instalação e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Para rodar em produção (compila o frontend e inicia o Express na porta `3001`):
   ```bash
   npm start
   ```
   Acesse `http://localhost:3001`.

3. Para desenvolvimento com hot-reload (em dois terminais):
   - Terminal 1 (API Express na porta `3001`):
     ```bash
     npm run server
     ```
   - Terminal 2 (Vite na porta `5173`):
     ```bash
     npm run dev
     ```
# encontro-ccb-jardim-olga
