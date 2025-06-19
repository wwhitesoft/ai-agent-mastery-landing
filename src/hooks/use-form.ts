import { useState, useCallback } from "react"

interface UseFormOptions<T> {
  initialValues: T
  onSubmit: (values: T) => Promise<void> | void
  validate?: (values: T) => Record<string, string>
}

interface UseFormReturn<T> {
  values: T
  errors: Record<string, string>
  isSubmitting: boolean
  isValid: boolean
  handleChange: (name: keyof T, value: any) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  setFieldError: (name: keyof T, error: string) => void
  clearErrors: () => void
  reset: () => void
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as string]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name as string]
        return newErrors
      })
    }
  }, [errors])

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [name as string]: error }))
  }, [])

  const clearErrors = useCallback(() => {
    setErrors({})
  }, [])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }, [initialValues])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Run validation if provided
    if (validate) {
      const validationErrors = validate(values)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      await onSubmit(values)
    } catch (error) {
      // Handle submission errors
      if (error instanceof Error) {
        setErrors({ submit: error.message })
      } else {
        setErrors({ submit: "Si è verificato un errore durante l'invio" })
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validate, onSubmit])

  const isValid = Object.keys(errors).length === 0 && !isSubmitting

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    handleChange,
    handleSubmit,
    setFieldError,
    clearErrors,
    reset
  }
}

// Validation helpers
export const validators = {
  required: (value: any) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return "Questo campo è obbligatorio"
    }
    return ""
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value && !emailRegex.test(value)) {
      return "Inserisci un indirizzo email valido"
    }
    return ""
  },

  minLength: (min: number) => (value: string) => {
    if (value && value.length < min) {
      return `Deve contenere almeno ${min} caratteri`
    }
    return ""
  },

  password: (value: string) => {
    if (value && value.length < 8) {
      return "La password deve contenere almeno 8 caratteri"
    }
    if (value && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return "La password deve contenere almeno una lettera maiuscola, una minuscola e un numero"
    }
    return ""
  },

  phone: (value: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
      return "Inserisci un numero di telefono valido"
    }
    return ""
  }
}

// Compose multiple validators
export function composeValidators(...validators: Array<(value: any) => string>) {
  return (value: any) => {
    for (const validator of validators) {
      const error = validator(value)
      if (error) return error
    }
    return ""
  }
}
