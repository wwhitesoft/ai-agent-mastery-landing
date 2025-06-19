import { HeroSection } from "@/components/sections/hero"
import { CurriculumSection } from "@/components/sections/curriculum"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CurriculumSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
