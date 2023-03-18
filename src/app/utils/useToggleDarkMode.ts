'use client'
import { useCallback, useEffect, useState } from 'react'

type UseToggleDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean
  toggle: (isDark?: boolean) => void
}

// dark mode と light mode を切り替える
export const useToggleDarkMode: UseToggleDarkMode = (isInitialDark = false) => {
  const [isDarkMode, toggleTheme] = useState<boolean>(isInitialDark)
  const toggle = useCallback((isDark?: any) => {
    if (typeof isDark === 'undefined') {
      toggleTheme((state) => !state)
      return
    }

    toggleTheme(isDark)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return { isDarkMode, toggle }
}
