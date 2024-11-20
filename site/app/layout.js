import { Providers } from './providers'
import Navigation from '@/components/layout/Navigation'
import ThemeToggle from '@/components/layout/ThemeToggle'
import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://joyspace.wiki'),
  title: {
    default: 'JoySpace Wiki - Organize Your Digital Space with Joy',
    template: '%s | JoySpace Wiki'
  },
  description: 'Open-source tools to organize your bookmarks, screenshots, and media. Local-first storage, community-driven development, bringing joy to your digital organization.',
  keywords: [
    'digital organization',
    'bookmark manager',
    'screenshot organizer',
    'media organization',
    'local-first storage',
    'open source',
    'productivity tools'
  ],
  authors: [{ name: 'JoySpace Community' }],
  creator: 'JoySpace Community',
  publisher: 'JoySpace',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joyspace.wiki',
    siteName: 'JoySpace Wiki',
    title: 'JoySpace Wiki - Organize Your Digital Space with Joy',
    description: 'Open-source tools to organize your bookmarks, screenshots, and media. Bringing joy to your digital organization.',
    images: [
      {
        url: '/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'JoySpace Wiki - Digital Organization Made Joyful'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoySpace Wiki - Digital Organization Made Joyful',
    description: 'Open-source tools to organize your bookmarks, screenshots, and media. Local-first, community-driven.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/JoyS-icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/JoyS-icon-dark.png', sizes: '192x192', type: 'image/png', media: '(prefers-color-scheme: dark)' }
    ],
    apple: [
      { url: '/JoyS-icon.png', sizes: '192x192' }
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)" />
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
        </Providers>
      </body>
    </html>
  )
}