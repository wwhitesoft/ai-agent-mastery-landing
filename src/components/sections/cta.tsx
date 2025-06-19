"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/ui/countdown-timer"

const urgencyFeatures = [
  {
    icon: Clock,
    text: "Offerta limitata - Solo 48 ore rimaste"
  },
  {
    icon: Users,
    text: "Solo 25 posti disponibili questo mese"
  },
  {
    icon: Award,
    text: "Garanzia di rimborso 30 giorni"
  },
  {
    icon: Zap,
    text: "Accesso immediato dopo l'iscrizione"
  }
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Badge variant="warning" className="mb-6 bg-yellow-500 text-yellow-900">
            🔥 Offerta Limitata - Scade Presto!
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Trasforma la Tua Carriera con l'AI
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Inizia Oggi Stesso
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Non aspettare che sia troppo tardi. L'AI sta rivoluzionando ogni settore.
            Chi si forma oggi, domani sarà leader. Chi aspetta, rimarrà indietro.
          </p>
        </motion.div>

        {/* Urgency Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {urgencyFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white">{feature.text}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">L'offerta scade tra:</h3>
          <CountdownTimer className="max-w-lg mx-auto" />
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="xl"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:from-yellow-500 hover:to-orange-600 shadow-2xl group"
              >
                Inizia Ora - Sconto 50%
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Prova Gratuita 7 Giorni
              </Button>
            </motion.div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-blue-200">
              ✅ Nessuna carta di credito richiesta per la prova gratuita
            </p>
            <p className="text-blue-200">
              ✅ Accesso immediato a tutto il contenuto
            </p>
            <p className="text-blue-200">
              ✅ Cancellazione in qualsiasi momento
            </p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-blue-200 mb-4">Trusted by professionals at:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Tesla'].map((company) => (
              <div key={company} className="text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-red-500/20 border border-red-400/30 rounded-lg p-6"
        >
          <h4 className="text-xl font-bold text-red-200 mb-2">
            ⚠️ Attenzione: Questa offerta non tornerà
          </h4>
          <p className="text-red-100">
            Dopo la scadenza, il prezzo tornerà a €597. Non perdere l'opportunità
            di trasformare la tua carriera con un investimento così conveniente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
