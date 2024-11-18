'use client'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <i className="bi bi-sun-fill text-neutral-300 hover:text-neutral-100"></i>
      ) : (
        <i className="bi bi-moon-fill text-neutral-600 hover:text-neutral-800"></i>
      )}
    </button>
  )
}