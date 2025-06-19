import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Mail, Lock, User, Eye, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Registrati - AI Agent Mastery",
  description: "Crea il tuo account AI Agent Mastery e inizia subito il tuo percorso per diventare un esperto di agenti AI.",
}

const benefits = [
  "Accesso immediato a tutto il contenuto",
  "Progetti pratici e portfolio professionale",
  "Mentorship 1-on-1 con esperti del settore",
  "Community esclusiva di 2,500+ studenti",
  "Certificato riconosciuto dall'industria",
  "Job placement e supporto carriera"
]

export default function SignupPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <Badge variant="success" className="mb-4">
                🚀 Inizia Oggi
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trasforma la Tua Carriera con l'{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unisciti a oltre 2,500 professionisti che hanno già cambiato la loro vita 
                professionale con le competenze AI più richieste del mercato.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Social Proof */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium text-gray-900">2,500+ studenti attivi</div>
                  <div className="text-sm text-gray-600">Rating medio: 4.9/5 ⭐</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Il miglior investimento che abbia mai fatto per la mia carriera. 
                In 6 mesi sono passato da developer a AI Specialist con +80% di stipendio!"
              </p>
              <div className="text-sm text-gray-500 mt-2">- Marco R., Ex-Google</div>
            </div>
          </div>
          
          {/* Right Column - Signup Form */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold">
                  Crea il Tuo Account
                </CardTitle>
                <CardDescription>
                  Inizia gratis e trasforma la tua carriera in 90 giorni
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Signup Form */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        placeholder="Mario Rossi"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        placeholder="mario@esempio.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Minimo 8 caratteri con lettere e numeri
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      Accetto i{" "}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Termini di Servizio
                      </Link>{" "}
                      e la{" "}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" variant="gradient">
                    Crea Account Gratuito
                  </Button>
                </form>
                
                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">oppure</span>
                  </div>
                </div>
                
                {/* Social Signup */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full" size="lg">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Registrati con Google
                  </Button>
                </div>
                
                {/* Login Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Hai già un account?{" "}
                    <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Accedi qui
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Trust Indicators */}
            <div className="mt-6 text-center">
              <div className="flex justify-center space-x-4 mb-3">
                <Badge variant="success">🔒 100% Sicuro</Badge>
                <Badge variant="info">⚡ Setup in 2 min</Badge>
                <Badge variant="warning">🎁 7 giorni gratis</Badge>
              </div>
              <p className="text-xs text-gray-500">
                Nessuna carta di credito richiesta • Cancellazione immediata
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
