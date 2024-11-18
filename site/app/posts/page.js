import { getAllPosts } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'

export default async function PostsPage() {
  const posts = await getAllPosts()

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-300">No posts found</p>
      </div>
    )
  }

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 py-16 -mt-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Latest Posts
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Explore our collection of thoughts, ideas, and discoveries
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {/* Featured Post */}
          {posts[0] && (
            <article className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <time className="text-sm text-neutral-500 dark:text-neutral-400">
                    {posts[0].date}
                  </time>
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-2 mb-4">
                    <Link
                      href={`/posts/${posts[0].slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {posts[0].title}
                    </Link>
                  </h2>
                  {posts[0].excerpt && (
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                      {posts[0].excerpt}
                    </p>
                  )}
                  <Link
                    href={`/posts/${posts[0].slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Read More
                    <i className="bi bi-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <time className="text-sm text-neutral-500 dark:text-neutral-400">
                  {post.date}
                </time>
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mt-2 mb-4">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && (
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {post.excerpt}
                  </p>
                )}
                <Link
                  href={`/posts/${post.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read More
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}