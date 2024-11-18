import Link from 'next/link'

export default function PostCard({ title, date, slug, compact = false }) {
  if (compact) {
    return (
      <div className="mb-4">
        <h3>
          <Link
            href={`/posts/${slug}`}
            className="no-underline text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {title}
          </Link>
        </h3>
        <time className="text-neutral-500 dark:text-neutral-400">
          {date}
        </time>
      </div>
    )
  }

  return (
    <article className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm animate-fadeIn hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        <Link
          href={`/posts/${slug}`}
          className="hover:text-primary-600 dark:hover:text-primary-400"
        >
          {title}
        </Link>
      </h2>
      <time className="text-neutral-500 dark:text-neutral-400">
        {date}
      </time>
    </article>
  )
}