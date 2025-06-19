"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    description: "Perfetto per iniziare il tuo viaggio nell'AI",
    price: 97,
    originalPrice: 197,
    icon: Star,
    popular: false,
    features: [
      "Accesso ai primi 2 moduli",
      "10 ore di video lezioni",
      "2 progetti pratici",
      "Community Discord",
      "Supporto email",
      "Certificato di completamento",
    ],
    notIncluded: [
      "Mentorship 1-on-1",
      "Progetti avanzati",
      "Job placement",
    ]
  },
  {
    name: "Pro",
    description: "Il piano più popolare per professionisti seri",
    price: 297,
    originalPrice: 597,
    icon: Zap,
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
      "Template e codice sorgente",
    ],
    notIncluded: [
      "Job placement garantito",
    ]
  },
  {
    name: "Enterprise",
    description: "Per aziende e team che vogliono eccellere",
    price: 997,
    originalPrice: 1997,
    icon: Crown,
    popular: false,
    features: [
      "Tutto del piano Pro",
      "Mentorship illimitata",
      "Progetti personalizzati",
      "Job placement assistito",
      "Accesso early a nuovi corsi",
      "Consulenza strategica AI",
      "Team dashboard",
      "Fatturazione aziendale",
      "SLA garantito",
    ],
    notIncluded: []
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="info" className="mb-4">
            💰 Offerta Limitata
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Investi nel Tuo{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Futuro Professionale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scegli il piano perfetto per le tue esigenze. Tutti i piani includono 
            una garanzia di rimborso di 30 giorni.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-red-800 font-medium">
              🔥 Sconto del 50% - Solo per i primi 100 studenti!
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600">
                      🌟 Più Popolare
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'border-blue-500 shadow-xl' : ''}`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-3 rounded-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gray-100'
                    } text-white mb-4`}>
                      <Icon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-gray-900">
                          {formatPrice(plan.price)}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(plan.originalPrice)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pagamento unico</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      variant={plan.popular ? "gradient" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      {plan.popular ? "Inizia Ora" : "Scegli Piano"}
                    </Button>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Cosa include:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Non include:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <div className="h-5 w-5 mt-0.5 flex-shrink-0 rounded-full border-2 border-gray-300" />
                              <span className="text-sm text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Non Sicuro? Prova Gratis per 7 Giorni
            </h3>
            <p className="text-gray-600 mb-6">
              Accedi a tutto il contenuto senza impegno. Cancella quando vuoi.
            </p>
            <Button size="lg" variant="outline">
              Inizia Prova Gratuita
            </Button>
            <p className="text-xs text-gray-500 mt-4">
              Nessuna carta di credito richiesta • Cancellazione immediata
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
