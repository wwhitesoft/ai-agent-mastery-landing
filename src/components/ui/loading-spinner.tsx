import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingStateProps {
  title?: string
  description?: string
  className?: string
}

export function LoadingState({ 
  title = "Caricamento...", 
  description = "Attendere prego", 
  className 
}: LoadingStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      <LoadingSpinner size="lg" className="mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

interface EmptyStateProps {
  title: string
  description: string
  action?: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export function EmptyState({ 
  title, 
  description, 
  action, 
  icon, 
  className 
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {action && action}
    </div>
  )
}

interface ErrorStateProps {
  title?: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function ErrorState({ 
  title = "Qualcosa è andato storto", 
  description = "Si è verificato un errore. Riprova più tardi.", 
  action, 
  className 
}: ErrorStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {action && action}
    </div>
  )
}
