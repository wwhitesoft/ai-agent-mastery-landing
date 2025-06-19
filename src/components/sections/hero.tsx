"use client"

import { motion } from "framer-motion"
import { Play, Star, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Studenti Attivi", value: "2,500+", icon: Users },
  { label: "Rating Medio", value: "4.9/5", icon: Star },
  { label: "Progetti Completati", value: "1,200+", icon: Award },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge variant="info" className="mb-6">
              🚀 Nuovo corso disponibile
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Diventa un{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Esperto di AI
              </span>{" "}
              in 90 giorni
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Impara a creare agenti AI professionali che automatizzano processi aziendali, 
              aumentano la produttività e generano valore reale. Zero esperienza richiesta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" variant="gradient" className="group">
                Inizia il Corso Gratuito
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="xl" variant="outline" className="group">
                <Play className="mr-2 h-5 w-5" />
                Guarda Demo (2 min)
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <Button size="lg" variant="default" className="relative z-10 shadow-lg">
                  <Play className="mr-2 h-6 w-6" />
                  Guarda l'Anteprima
                </Button>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ✓ Certificato Incluso
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                🎯 Progetti Reali
              </div>
            </div>

            {/* Floating testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-medium text-gray-900">Marco R.</div>
                  <div className="text-sm text-gray-600">Developer → AI Specialist</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                "In 3 mesi ho creato il mio primo agente AI che ha automatizzato il 70% del mio lavoro!"
              </p>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
