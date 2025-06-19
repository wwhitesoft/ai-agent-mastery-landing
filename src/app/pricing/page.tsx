import { Metadata } from "next"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "Prezzi e Piani - AI Agent Mastery",
  description: "Scegli il piano perfetto per le tue esigenze. Tutti i piani includono garanzia di rimborso di 30 giorni e accesso a vita agli aggiornamenti.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Investi nel Tuo{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Futuro
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scegli il piano che si adatta meglio ai tuoi obiettivi e al tuo budget. 
            Ogni piano è progettato per massimizzare il tuo ROI e accelerare la tua carriera nell'AI.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-800 font-medium">
              🎉 Offerta Speciale: 50% di sconto per i primi 100 studenti!
            </p>
          </div>
        </div>
      </section>

      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}
