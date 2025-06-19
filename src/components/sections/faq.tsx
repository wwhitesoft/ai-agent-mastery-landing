"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Ho bisogno di esperienza in programmazione per iniziare?",
    answer: "No, il corso è progettato per principianti assoluti. Iniziamo dalle basi della programmazione Python e ti guidiamo passo dopo passo fino alla creazione di agenti AI complessi. Molti dei nostri studenti di maggior successo non avevano alcuna esperienza tecnica prima di iniziare."
  },
  {
    question: "Quanto tempo devo dedicare al corso ogni settimana?",
    answer: "Consigliamo 8-10 ore a settimana per completare il corso in 12 settimane. Tuttavia, puoi andare al tuo ritmo - alcuni studenti completano il corso in 8 settimane dedicando più tempo, altri impiegano 16 settimane studiando part-time."
  },
  {
    question: "Che tipo di supporto ricevo durante il corso?",
    answer: "Ricevi supporto completo: accesso alla community Discord 24/7, sessioni di Q&A settimanali dal vivo, supporto email prioritario, e per i piani Pro ed Enterprise, sessioni di mentorship 1-on-1 con esperti del settore."
  },
  {
    question: "Il certificato è riconosciuto dalle aziende?",
    answer: "Sì, il nostro certificato è riconosciuto da oltre 200 aziende partner in Italia e Europa. Inoltre, il portfolio di progetti che creerai durante il corso è spesso più importante del certificato stesso per dimostrare le tue competenze ai datori di lavoro."
  },
  {
    question: "Posso accedere al corso da mobile/tablet?",
    answer: "Assolutamente sì! La nostra piattaforma è completamente responsive e ottimizzata per tutti i dispositivi. Puoi guardare le lezioni, partecipare alle discussioni e persino fare alcuni esercizi dal tuo smartphone o tablet."
  },
  {
    question: "Cosa succede se non sono soddisfatto del corso?",
    answer: "Offriamo una garanzia di rimborso completo di 30 giorni, senza domande. Se entro i primi 30 giorni decidi che il corso non fa per te, ti rimborsiamo l'intero importo. La tua soddisfazione è la nostra priorità."
  },
  {
    question: "Aiutate con il job placement?",
    answer: "Sì! Gli studenti dei piani Pro ed Enterprise hanno accesso al nostro servizio di job placement che include: revisione del CV, preparazione ai colloqui, connessioni con aziende partner, e supporto nella negoziazione dello stipendio. Il 94% dei nostri studenti trova lavoro entro 6 mesi."
  },
  {
    question: "Posso pagare a rate?",
    answer: "Sì, offriamo piani di pagamento flessibili. Puoi dividere il pagamento in 3, 6 o 12 rate mensili senza interessi. Contatta il nostro team per discutere l'opzione migliore per te."
  },
  {
    question: "Il corso viene aggiornato con le nuove tecnologie?",
    answer: "Assolutamente! L'AI evolve rapidamente e noi aggiorniamo costantemente il contenuto. Tutti gli studenti ricevono accesso gratuito a vita agli aggiornamenti del corso, inclusi nuovi moduli su tecnologie emergenti come GPT-4, Claude, e altri modelli all'avanguardia."
  },
  {
    question: "Posso frequentare il corso mentre lavoro full-time?",
    answer: "Certamente! Il corso è progettato per professionisti che lavorano. Le lezioni sono pre-registrate quindi puoi studiare quando vuoi, e le sessioni live sono registrate per chi non può partecipare. Molti dei nostri studenti lavorano full-time e completano con successo il corso."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="info" className="mb-4">
            ❓ FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Domande{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequenti
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Abbiamo raccolto le domande più comuni dei nostri studenti. 
            Non trovi la risposta che cerchi? Contattaci!
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hai Altre Domande?
            </h3>
            <p className="text-gray-600 mb-6">
              Il nostro team è qui per aiutarti. Prenota una chiamata gratuita di 15 minuti 
              per discutere i tuoi obiettivi e vedere se il corso è adatto a te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Prenota Chiamata Gratuita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-white transition-all duration-200"
              >
                Invia Email
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
