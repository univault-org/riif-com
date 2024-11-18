import { getPostBySlug, getAllPosts } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BackToTopButton from '@/components/posts/BackToTopButton'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}


export default async function PostPage(props)  {
  try {
   // Wait for params to be available
   const params = await Promise.resolve(props.params)
   const { content, metadata } = await getPostBySlug(params.slug)
   const readingTime = calculateReadingTime(content)

    return (
      <div className="max-w-6xl mx-auto animate-fadeIn">
        {/* Article Header */}
        <header className="relative py-16 -mt-8 mb-12 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              {metadata.title}
            </h1>
            {metadata.excerpt && (
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                {metadata.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center">
                <i className="bi bi-person mr-2"></i>
                <span>{metadata.author || 'Anonymous'}</span>
              </div>
              <div className="flex items-center">
                <i className="bi bi-calendar3 mr-2"></i>
                <time>{metadata.date}</time>
              </div>
              <div className="flex items-center">
                <i className="bi bi-clock mr-2"></i>
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <article className="px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {metadata.image && (
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg relative h-[400px]">
                <Image
                  src={metadata.image}
                  alt={metadata.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            )}
            
            <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-xl shadow-sm">
              <div 
                dangerouslySetInnerHTML={{ __html: content }}
                className="markdown-content"
              />
            </div>

            {/* Article Footer */}
            <footer className="mt-12 mb-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 dark:text-neutral-400">
              <Link
                href="/posts"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <i className="bi bi-arrow-left mr-2"></i>
                Back to Posts
              </Link>
              <BackToTopButton />
            </footer>
          </div>
        </article>
      </div>
    )
  } catch (error) {
    notFound()
  }
}