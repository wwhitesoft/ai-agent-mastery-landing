"use client"

import { useState, useEffect, useRef } from "react"

interface CountdownTimerProps {
  targetDate?: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 1,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  const [mounted, setMounted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)

    // Use a fixed target date to avoid recreation
    const targetTime = targetDate?.getTime() || (Date.now() + 48 * 60 * 60 * 1000)

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetTime - Date.now()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    // Update every second
    intervalRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [targetDate])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {[1, 23, 45, 30].map((value, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-blue-200 font-medium">
                <span className="hidden sm:inline">{['Giorni', 'Ore', 'Min', 'Sec'][index]}</span>
                <span className="sm:hidden">{['G', 'H', 'M', 'S'][index]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0')
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Giorni', shortLabel: 'G' },
    { value: timeLeft.hours, label: 'Ore', shortLabel: 'H' },
    { value: timeLeft.minutes, label: 'Min', shortLabel: 'M' },
    { value: timeLeft.seconds, label: 'Sec', shortLabel: 'S' }
  ]

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
              {formatNumber(unit.value)}
            </div>
            <div className="text-sm text-blue-200 font-medium">
              <span className="hidden sm:inline">{unit.label}</span>
              <span className="sm:hidden">{unit.shortLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
