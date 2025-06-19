export const siteConfig = {
  name: "AI Agent Mastery",
  description: "La tua accademia per creare agenti AI professionali. Trasforma la tua carriera con le competenze del futuro.",
  url: "https://aiagentmastery.it",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/aiagentmastery",
    github: "https://github.com/aiagentmastery",
    linkedin: "https://linkedin.com/company/aiagentmastery",
    discord: "https://discord.gg/aiagentmastery",
  },
  contact: {
    email: "info@aiagentmastery.it",
    phone: "+39 02 1234 5678",
    address: "Milano, Italia"
  },
  course: {
    duration: "12 settimane",
    totalHours: "40+",
    projects: 15,
    students: "2,500+",
    successRate: "94%",
    averageSalary: "€85k",
    rating: "4.9/5"
  },
  pricing: {
    basic: {
      name: "Basic",
      price: 97,
      originalPrice: 197,
      features: [
        "Accesso ai primi 2 moduli",
        "10 ore di video lezioni",
        "2 progetti pratici",
        "Community Discord",
        "Supporto email",
        "Certificato di completamento"
      ]
    },
    pro: {
      name: "Pro",
      price: 297,
      originalPrice: 597,
      popular: true,
      features: [
        "Accesso completo a tutti i moduli",
        "40+ ore di video lezioni",
        "15 progetti pratici",
        "Community Discord VIP",
        "Supporto prioritario",
        "3 sessioni di mentorship 1-on-1",
        "Certificato professionale",
        "Accesso a vita agli aggiornamenti",
        "Template e codice sorgente"
      ]
    },
    enterprise: {
      name: "Enterprise",
      price: 997,
      originalPrice: 1997,
      features: [
        "Tutto del piano Pro",
        "Mentorship illimitata",
        "Progetti personalizzati",
        "Job placement assistito",
        "Accesso early a nuovi corsi",
        "Consulenza strategica AI",
        "Team dashboard",
        "Fatturazione aziendale",
        "SLA garantito"
      ]
    }
  }
}

export type SiteConfig = typeof siteConfig
