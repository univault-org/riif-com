import { Providers } from './providers'
import Navigation from '@/components/layout/Navigation'
import ThemeToggle from '@/components/layout/ThemeToggle'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
        <Providers>
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
              Built with MarkVault - Preserving digital content for generations
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}