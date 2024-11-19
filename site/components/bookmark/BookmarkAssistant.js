'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { formatAndValidateUrl } from '@/utils';

export default function BookmarkAssistant() {
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [url, setUrl] = useState('')
  const router = useRouter()


  const handleTryAssistant = (e) => {
    e.preventDefault()
    if (url) {
        const result = formatAndValidateUrl(url);
        if (result.isValid) {
            const encodedUrl = encodeURIComponent(result.url);
            router.push(`/bookmark-assistant?url=${encodedUrl}`);
        } else {
            setError(result.error);
            setTimeout(() => setError(null), 3000);
        }
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          href="https://github.com/univault-org/JoySpace"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          Get Started
          <i className="bi bi-arrow-right ml-2"></i>
        </Link>
        <button
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-100 font-medium transition-colors"
        >
          Try Bookmark Assistant
          <i className="bi bi-robot ml-2"></i>
        </button>
      </div>

      {/* URL Input Form */}
      {showUrlInput && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg mt-4"
        >
          <form onSubmit={handleTryAssistant} className="relative">
            <input
              type="text"
              placeholder="Insert any URL and press Enter"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 
                       dark:border-neutral-700 bg-white dark:bg-neutral-800 
                       text-neutral-900 dark:text-neutral-100 
                       focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       placeholder-neutral-400 dark:placeholder-neutral-500
                       transition-all"
              autoFocus
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
              <i className="bi bi-link-45deg text-lg"></i>
            </div>
          </form>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            Enter any URL to see how our assistant extracts and formats bookmark information
          </p>
        </motion.div>
      )}
    </div>
  )
}