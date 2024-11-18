'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../shared/Logo'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Logo />
      </Link>
      <div className="space-x-4">
        <Link
          href="/"
          className={`${
            pathname === '/'
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === '/about'
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
        >
          About
        </Link>
        <Link
          href="/posts"
          className={`${
            pathname === '/posts'
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
        >
          Posts
        </Link>
      </div>
    </nav>
  )
}