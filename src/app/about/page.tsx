import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Chi Siamo - AI Agent Mastery",
  description: "Scopri la storia di AI Agent Mastery e del team di esperti che ha creato il corso più completo per diventare specialisti in agenti AI.",
}

const stats = [
  { icon: Users, label: "Studenti Formati", value: "2,500+" },
  { icon: Award, label: "Anni di Esperienza", value: "15+" },
  { icon: BookOpen, label: "Ore di Contenuto", value: "40+" },
  { icon: Target, label: "Tasso di Successo", value: "94%" },
]

const team = [
  {
    name: "Dr. Marco Alberti",
    role: "Founder & Lead Instructor",
    bio: "Ex-Google AI Research, PhD in Machine Learning da Stanford. Ha guidato team di AI in 3 unicorn e pubblicato 50+ paper su riviste internazionali.",
    image: "/team/marco.jpg"
  },
  {
    name: "Giulia Rossi",
    role: "Head of Curriculum",
    bio: "Ex-Microsoft AI, specialista in Natural Language Processing. Ha progettato curriculum per università e aziende Fortune 500.",
    image: "/team/giulia.jpg"
  },
  {
    name: "Alessandro Bianchi",
    role: "Industry Relations",
    bio: "Ex-Amazon Alexa, esperto in deployment di AI in produzione. Mantiene le relazioni con 200+ aziende partner per job placement.",
    image: "/team/alessandro.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="info" className="mb-6">
            🚀 La Nostra Storia
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Democratizzare l'{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Educazione AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La nostra missione è rendere l'educazione AI accessibile a tutti, 
            fornendo formazione di qualità mondiale che trasforma carriere e vite.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La Nostra Storia
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              AI Agent Mastery è nata nel 2023 dalla frustrazione di vedere troppi professionisti 
              talentuosi rimanere indietro nella rivoluzione dell'intelligenza artificiale. 
              I nostri founder, tutti ex-dipendenti di Big Tech, hanno notato un gap enorme 
              tra la domanda di competenze AI e l'offerta formativa disponibile.
            </p>
            
            <p>
              Mentre le università impiegavano anni per aggiornare i curriculum e i corsi online 
              rimanevano superficiali, migliaia di professionisti perdevano opportunità di carriera 
              da centinaia di migliaia di euro. Era necessario un approccio diverso.
            </p>
            
            <p>
              Abbiamo quindi creato il primo corso che combina:
            </p>
            
            <ul>
              <li><strong>Teoria solida</strong> - Fondamenti scientifici da università top-tier</li>
              <li><strong>Pratica intensiva</strong> - Progetti reali che puoi mostrare ai datori di lavoro</li>
              <li><strong>Mentorship personalizzata</strong> - Supporto 1-on-1 da esperti del settore</li>
              <li><strong>Network professionale</strong> - Connessioni dirette con aziende che assumono</li>
            </ul>
            
            <p>
              Oggi, dopo aver formato oltre 2,500 studenti con un tasso di successo del 94%, 
              siamo orgogliosi di essere riconosciuti come il corso #1 in Italia per 
              diventare specialisti in agenti AI.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Il Nostro Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un team di esperti con esperienza combinata di oltre 50 anni nelle migliori 
              aziende tech del mondo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            I Nostri Valori
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Risultati Concreti</h3>
              <p className="text-gray-600">
                Non ci interessano i certificati fine a se stessi. Vogliamo che i nostri 
                studenti ottengano promozioni, aumenti di stipendio e nuove opportunità.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Supporto Umano</h3>
              <p className="text-gray-600">
                L'AI può automatizzare molte cose, ma l'apprendimento richiede ancora 
                il tocco umano. Ogni studente ha accesso a mentorship personalizzata.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Innovazione Continua</h3>
              <p className="text-gray-600">
                L'AI evolve rapidamente e noi con essa. Aggiorniamo costantemente 
                il curriculum per rimanere all'avanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
