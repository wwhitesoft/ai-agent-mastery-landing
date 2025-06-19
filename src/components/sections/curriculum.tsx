"use client"

import { motion } from "framer-motion"
import { Clock, Users, CheckCircle, PlayCircle, FileText, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const modules = [
  {
    id: 1,
    title: "Fondamenti dell'AI",
    description: "Comprendi i concetti base dell'intelligenza artificiale e del machine learning",
    duration: "2 settimane",
    lessons: 12,
    projects: 2,
    level: "Principiante",
    topics: ["Introduzione all'AI", "Machine Learning Basics", "Neural Networks", "Algoritmi di Base"],
    icon: FileText,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Programmazione per AI",
    description: "Impara Python, librerie essenziali e framework per lo sviluppo di AI",
    duration: "3 settimane",
    lessons: 18,
    projects: 4,
    level: "Intermedio",
    topics: ["Python Avanzato", "TensorFlow", "PyTorch", "Pandas & NumPy"],
    icon: Code,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Creazione di Agenti AI",
    description: "Sviluppa il tuo primo agente AI funzionale con capacità di ragionamento",
    duration: "4 settimane",
    lessons: 24,
    projects: 6,
    level: "Intermedio",
    topics: ["Agent Architecture", "Decision Making", "Natural Language Processing", "API Integration"],
    icon: PlayCircle,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "AI per Business",
    description: "Applica l'AI a casi d'uso reali e impara a monetizzare le tue competenze",
    duration: "3 settimane",
    lessons: 15,
    projects: 3,
    level: "Avanzato",
    topics: ["Business Cases", "ROI Analysis", "Deployment", "Scaling"],
    icon: Users,
    color: "from-orange-500 to-orange-600"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function CurriculumSection() {
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
          <Badge variant="info" className="mb-4">
            📚 Curriculum Completo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Un Percorso Strutturato per il{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Successo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12 settimane di formazione intensiva con progetti pratici, 
            mentorship personalizzata e certificazione riconosciuta dall'industria.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div key={module.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${module.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">{module.level}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      Modulo {module.id}: {module.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PlayCircle className="h-4 w-4" />
                        <span>{module.lessons} lezioni</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>{module.projects} progetti</span>
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Argomenti Principali:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      Anteprima Modulo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto a Iniziare il Tuo Viaggio?
            </h3>
            <p className="text-gray-600 mb-6">
              Accedi al curriculum completo, progetti pratici e supporto della community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient">
                Inizia Ora - Gratis per 7 Giorni
              </Button>
              <Button size="lg" variant="outline">
                Scarica Curriculum PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
