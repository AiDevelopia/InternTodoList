// src/hooks/useLocalStorage.tsx
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Load value from localStorage on first render
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”: ', error)
      return initialValue
    }
  })

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”: ', error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
