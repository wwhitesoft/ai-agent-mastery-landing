import { Metadata } from "next"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Storie di Successo - AI Agent Mastery",
  description: "Scopri le storie di trasformazione dei nostri studenti. Oltre 2,500 professionisti hanno già cambiato la loro carriera con AI Agent Mastery.",
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Storie di{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trasformazione
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ogni giorno, i nostri studenti raggiungono traguardi straordinari. 
            Dalle promozioni agli aumenti di stipendio, dalle startup di successo 
            ai cambi di carriera: ecco le loro storie.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Tasso di Successo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">€85k</div>
              <div className="text-gray-600">Stipendio Medio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6 mesi</div>
              <div className="text-gray-600">Tempo Medio Job Placement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2,500+</div>
              <div className="text-gray-600">Studenti Formati</div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
