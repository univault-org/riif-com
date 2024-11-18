import { getAllPosts } from '@/lib/markdown'
import PostCard from '@/components/posts/PostCard'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()
  const latestPosts = posts.slice(0, 3)

  const features = [
    {
      title: "Markdown Powered",
      description: "Write in markdown, publish with confidence. Simple and powerful.",
      icon: <i className="bi bi-markdown-fill text-3xl"></i>,
    },
    {
      title: "Dark Mode",
      description: "Easy on the eyes, day or night. Automatic theme switching.",
      icon: <i className="bi bi-moon-stars-fill text-3xl"></i>,
    },
    {
      title: "Lightning Fast",
      description: "Minimal dependencies, maximum performance. Built for speed.",
      icon: <i className="bi bi-lightning-fill text-3xl"></i>,
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-8 mb-16 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300">
                Preserve Your Digital Legacy
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                A modern markdown-powered platform designed for long-term content preservation
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Link
                  href="/posts"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
                >
                  Explore Posts
                  <i className="bi bi-arrow-right ml-2"></i>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-100 font-medium transition-colors"
                >
                  Learn More
                  <i className="bi bi-info-circle ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">
          Why Choose MarkVault?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 text-primary-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-neutral-800 dark:text-neutral-100">
          Latest Posts
        </h2>
        <div className="grid gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}