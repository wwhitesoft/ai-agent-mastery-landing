import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-md mx-auto text-center px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Pagina Non Trovata
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Ops! La pagina che stai cercando non esiste o è stata spostata. 
          Torna alla homepage per continuare la tua esplorazione dell'AI.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="gradient">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Torna alla Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline">
            <Link href="/curriculum">
              <Search className="mr-2 h-5 w-5" />
              Esplora il Corso
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Link Utili:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/curriculum" className="text-blue-600 hover:text-blue-800 transition-colors">
              Curriculum
            </Link>
            <Link href="/pricing" className="text-blue-600 hover:text-blue-800 transition-colors">
              Prezzi
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
              Chi Siamo
            </Link>
            <Link href="/success-stories" className="text-blue-600 hover:text-blue-800 transition-colors">
              Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
