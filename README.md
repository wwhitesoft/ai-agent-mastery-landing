# 🚀 AI Agent Mastery - Landing Page

Una landing page moderna e completa per un'accademia di formazione su agenti AI, costruita con Next.js 14, TypeScript e Tailwind CSS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wwhitesoft/ai-agent-mastery-landing)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://ai-agent-mastery-landing.vercel.app)

![AI Agent Mastery Preview](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=AI+Agent+Mastery)

## 🚀 Funzionalità Principali

- **Hero Section** con video introduttivo e CTA per iscrizione immediata
- **Moduli del Corso** con preview dei contenuti e durata stimata
- **Testimonial** e progetti realizzati dagli studenti precedenti
- **Sistema di Pricing** con opzioni (Basic, Pro, Enterprise)
- **FAQ Dinamiche** con animazioni fluide
- **Design Responsive** ottimizzato per tutti i dispositivi
- **Animazioni Avanzate** con Framer Motion
- **SEO Ottimizzato** con meta tags e schema markup

## 🛠️ Stack Tecnologico

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Animazioni**: Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Styling**: Tailwind CSS con design system personalizzato
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Struttura del Progetto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── about/             # Pagina Chi Siamo
│   ├── curriculum/        # Pagina Curriculum
│   ├── pricing/           # Pagina Prezzi
│   ├── globals.css        # Stili globali
│   ├── layout.tsx         # Layout principale
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header e Footer
│   ├── sections/          # Sezioni della landing page
│   └── ui/                # Componenti UI riutilizzabili
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Sezioni della Landing Page

1. **Hero Section** - Introduzione con video e statistiche
2. **Curriculum Section** - Moduli del corso con dettagli
3. **Testimonials Section** - Storie di successo degli studenti
4. **Pricing Section** - Piani di abbonamento con confronto
5. **FAQ Section** - Domande frequenti con accordion
6. **CTA Section** - Call-to-action finale con urgency

## 🚀 Come Iniziare

1. **Clona il repository**
```bash
git clone <repository-url>
cd ai-agent-mastery
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Avvia il server di sviluppo**
```bash
npm run dev
```

4. **Apri il browser**
Vai su [http://localhost:3000](http://localhost:3000)

## 📱 Pagine Disponibili

- `/` - Homepage completa
- `/curriculum` - Dettaglio curriculum del corso
- `/pricing` - Piani e prezzi
- `/about` - Chi siamo e team

## 🎯 Caratteristiche del Design

- **Design System Coerente** con colori e tipografia unificati
- **Animazioni Fluide** per migliorare l'esperienza utente
- **Responsive Design** che funziona su tutti i dispositivi
- **Performance Ottimizzate** con lazy loading e ottimizzazioni Next.js
- **Accessibilità** con componenti Radix UI accessibili

## 🔧 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.ts` e `globals.css`:
- Primary: Blue (221.2 83.2% 53.3%)
- Secondary: Purple gradient
- Accent colors per stati e feedback

### Componenti
I componenti UI sono in `src/components/ui/` e possono essere facilmente personalizzati:
- Button con varianti multiple
- Card per contenuti strutturati
- Badge per etichette e stati

### Animazioni
Le animazioni sono gestite con Framer Motion e includono:
- Fade in/out
- Slide animations
- Scale effects
- Stagger animations per liste

## 📈 Performance e SEO

- **Next.js 14** con App Router per performance ottimali
- **Meta tags** ottimizzati per SEO
- **Open Graph** e Twitter Cards
- **Structured data** per i motori di ricerca
- **Lazy loading** per immagini e componenti

## 🚀 Deploy

Il progetto è ottimizzato per il deploy su Vercel:

```bash
npm run build
```

Per altri provider, seguire la documentazione di Next.js per il deployment.

## 📝 Licenza

Questo progetto è stato creato per scopi educativi e dimostrativi.

## 🤝 Contributi

Per contribuire al progetto:
1. Fork del repository
2. Crea un branch per la tua feature
3. Commit delle modifiche
4. Push del branch
5. Apri una Pull Request

## 📞 Supporto

Per domande o supporto, contatta il team di sviluppo.
