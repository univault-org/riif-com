'use client'

export default function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex items-center px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
    >
      <i className="bi bi-arrow-up mr-2"></i>
      Back to Top
    </button>
  )
}