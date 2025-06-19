"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Senior Developer → AI Specialist",
    company: "TechCorp",
    image: "/testimonials/marco.jpg",
    content: "Dopo 3 mesi di corso ho creato il mio primo agente AI che ha automatizzato il 70% del mio lavoro quotidiano. Il ROI è stato incredibile!",
    rating: 5,
    result: "+150% produttività"
  },
  {
    name: "Giulia Bianchi",
    role: "Marketing Manager → AI Consultant",
    company: "Freelance",
    image: "/testimonials/giulia.jpg",
    content: "Da zero esperienza in programmazione a consulente AI in 6 mesi. Ora guadagno 3x di più e lavoro con clienti internazionali.",
    rating: 5,
    result: "+300% income"
  },
  {
    name: "Alessandro Verdi",
    role: "Startup Founder",
    company: "AI Solutions SRL",
    image: "/testimonials/alessandro.jpg",
    content: "Il corso mi ha dato le competenze per lanciare la mia startup AI. Abbiamo già raccolto 500k€ di seed funding!",
    rating: 5,
    result: "500k€ funding"
  },
  {
    name: "Francesca Neri",
    role: "Data Analyst → ML Engineer",
    company: "BigTech",
    image: "/testimonials/francesca.jpg",
    content: "Grazie al corso sono passata da analista a ML Engineer in una FAANG. Lo stipendio è raddoppiato e il lavoro è molto più stimolante.",
    rating: 5,
    result: "+100% salary"
  },
  {
    name: "Roberto Ferrari",
    role: "Business Owner",
    company: "E-commerce",
    image: "/testimonials/roberto.jpg",
    content: "Ho implementato agenti AI nel mio e-commerce che gestiscono customer service e inventory. Risparmio 20 ore a settimana!",
    rating: 5,
    result: "20h/week saved"
  },
  {
    name: "Chiara Russo",
    role: "HR Manager → People Analytics",
    company: "Corporate",
    image: "/testimonials/chiara.jpg",
    content: "Ora uso AI per analizzare performance e predire turnover. Sono diventata indispensabile per l'azienda e ho ottenuto una promozione.",
    rating: 5,
    result: "Promoted to Director"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="success" className="mb-4">
            ⭐ Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Storie di{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trasformazione
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oltre 2,500 professionisti hanno già trasformato la loro carriera. 
            Ecco alcune delle loro storie di successo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Result Badge */}
                  <Badge variant="success" className="mb-4">
                    {testimonial.result}
                  </Badge>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                <div className="text-gray-600">Studenti Attivi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-gray-600">Tasso di Successo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">€85k</div>
                <div className="text-gray-600">Stipendio Medio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Rating Medio</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto a Scrivere la Tua Storia di Successo?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Unisciti a migliaia di professionisti che hanno già trasformato la loro carriera 
            con le competenze AI più richieste del mercato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Inizia la Tua Trasformazione
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
            >
              Parla con un Consulente
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
