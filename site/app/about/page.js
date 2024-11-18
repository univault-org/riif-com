import { getPageContent } from '@/lib/markdown'
import { format } from 'date-fns'

export default async function About() {
  const { content, metadata } = await getPageContent('about.md')

  // Format the lastUpdated date if it exists
  const formattedDate = metadata.lastUpdated 
    ? format(new Date(metadata.lastUpdated), 'MMMM d, yyyy')
    : null

  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto">
      {/* <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
        {metadata.title || 'About MarkVault'}
      </h1> */}
      
      <div 
        className="markdown-content text-neutral-600 dark:text-neutral-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {formattedDate && (
        <div className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {formattedDate}
        </div>
      )}
    </article>
  )
}