import { Metadata } from "next"
import { CurriculumSection } from "@/components/sections/curriculum"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Curriculum Completo - AI Agent Mastery",
  description: "Scopri il curriculum completo del corso AI Agent Mastery. 12 settimane di formazione intensiva con progetti pratici e mentorship personalizzata.",
}

export default function CurriculumPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Curriculum{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Completo
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Un percorso strutturato e progressivo che ti porterà da principiante 
            a esperto di AI in soli 90 giorni. Ogni modulo è progettato per 
            costruire competenze concrete e applicabili nel mondo reale.
          </p>
        </div>
      </section>

      <CurriculumSection />
      <CTASection />
    </div>
  )
}
