import { getAllPosts } from "@/lib/markdown";
import PostCard from "@/components/posts/PostCard";
import Link from "next/link";
import BookmarkAssistant from "@/components/bookmark/BookmarkAssistant";

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  const features = [
    {
      title: "Local-First Storage",
      description:
        "Your content stays on your machine with optional sync capabilities. Full control over your data.",
      icon: <i className="bi bi-hdd-fill text-3xl"></i>,
    },
    {
      title: "Community-Driven",
      description:
        "Built by the community, for the community. Become a contributor and shape the future.",
      icon: <i className="bi bi-people-fill text-3xl"></i>,
    },
    {
      title: "Open Source & Sustainable",
      description:
        "Core features free forever, with optional premium features to support development and unlock advanced capabilities.",
      icon: <i className="bi bi-code-square text-3xl"></i>,
    },
  ];

  const pricingTiers = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for personal web bookmarking",
      features: [
        "Local-first storage",
        "Basic bookmark management",
        "Community support",
        "Core features",
        "Basic search",
        "Unlimited bookmarks",
      ],
      icon: <i className="bi bi-heart text-3xl"></i>,
      buttonText: "Get Started",
    },
    {
      name: "Sponsor",
      price: "$5/month",
      description: "Enhanced features for video learning and research",
      features: [
        "Everything in Community, plus:",
        {
          title: "Video Learning Suite",
          items: [
            "Timestamp bookmarking in videos",
            "Video chapter notes",
            "Support for local & YouTube videos",
            "Create learning playlists",
          ],
        },
        {
          title: "Advanced Organization",
          items: [
            "Search across video timestamps",
            "Topic-based collections",
            "Cross-reference notes",
            "Export video notes",
          ],
        },
        {
          title: "Premium Support",
          items: [
            "Priority email support",
            "Early access to features",
            "Custom integrations",
          ],
        },
      ],
      icon: <i className="bi bi-play-circle-fill text-3xl"></i>,
      buttonText: "Become a Sponsor",
      highlighted: true,
    },
  ];

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
                Joyganize Your Digital Space
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                Open-source tools to organize your bookmarks, screenshots, and
                media. Bringing joy to your digital organization.
              </p>
              {/* Action Buttons */}
              <BookmarkAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Steps */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">
          Get Started in Minutes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Download JoySpace",
              description: "Clone or download the repository from GitHub",
            },
            {
              step: "02",
              title: "Choose Your Space",
              description:
                "Select your preferred organization space: bookmarks, screenshots, or media",
            },
            {
              step: "03",
              title: "Start Organizing",
              description:
                "Begin adding content - runs entirely in your browser, no installation needed",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="text-center p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-sm"
            >
              <div className="text-2xl font-bold text-primary-500 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                {step.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">
          Bringing Joy to Organizing Your Digital Workspace
          <span className="block text-lg font-normal text-neutral-600 dark:text-neutral-400 mt-2">
            Simple tools that make digital life feel more organized and
            delightful
          </span>
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

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-100">
          Support Open Source, Unlock More Joy
        </h2>
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Your sponsorship directly supports our community developers who
            dedicate their time and expertise to building better tools for
            everyone.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            <i className="bi bi-heart-fill text-primary-500 mr-2"></i>
            Join our mission to make digital organization accessible to all
            while enjoying premium features
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/20 dark:to-neutral-800 border border-primary-200 dark:border-primary-700"
                  : "bg-white dark:bg-neutral-800"
              } shadow-lg`}
            >
              <div className="text-center mb-8">
                <div className="mb-4 text-primary-500 opacity-75">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  {tier.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                    {tier.price}
                  </span>
                  {tier.price !== "Free" && (
                    <span className="text-neutral-500 dark:text-neutral-400 ml-1">
                      /month
                    </span>
                  )}
                </div>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-6">
                {tier.features.map((feature, featureIndex) =>
                  typeof feature === "string" ? (
                    <div
                      key={`${tier.name}-feature-${featureIndex}`}
                      className="flex items-center text-neutral-600 dark:text-neutral-400"
                    >
                      <i className="bi bi-check2 text-primary-500 mr-3 text-lg"></i>
                      {feature}
                    </div>
                  ) : (
                    <div
                      key={`${tier.name}-${feature.title}`}
                      className="space-y-3"
                    >
                      <div className="font-medium text-neutral-800 dark:text-neutral-200 flex items-center border-b border-neutral-200 dark:border-neutral-700 pb-2">
                        <i
                          className={`bi bi-${
                            feature.title.includes("Video")
                              ? "camera-video"
                              : feature.title.includes("Advanced")
                              ? "search-heart"
                              : "headset"
                          } text-primary-500 mr-2`}
                        ></i>
                        {feature.title}
                      </div>
                      <div className="space-y-2 pl-4">
                        {feature.items.map((item, itemIndex) => (
                          <div
                            key={`${tier.name}-${feature.title}-${itemIndex}`}
                            className="flex items-start text-neutral-600 dark:text-neutral-400"
                          >
                            <i className="bi bi-arrow-right-short text-primary-400 mr-2 mt-1"></i>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8">
                <button
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-md hover:shadow-lg"
                      : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-100"
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
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
  );
}
