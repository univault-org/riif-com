'use client'
import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return children
  }

  return (
    <>
      <nav className="bg-white dark:bg-neutral-800 shadow-sm sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-neutral-500 dark:text-neutral-400">
          Built with{' '}
          <a 
            href="https://github.com/univault-org/MarkVault"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
          >
            MarkVault <i className="bi bi-github text-lg"></i>
          </a>
          {' '}- Preserving digital content for generations
        </div>
      </footer>
    </>
  )
}