/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static HTML export
    
    // Configure base path for GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/JoySpace-Site' : '',
    
    // Required for static export
    images: {
      unoptimized: true,
    },
  
    // Enable React strict mode for better development
    reactStrictMode: true,
  
    // Disable API routes in static export
    rewrites: () => [],
    
    // Add trailing slash for static export
    trailingSlash: true,

    // Specify which paths to generate statically
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        '/bookmark-assistant': { page: '/bookmark-assistant' },
        // Add other static pages here as needed
      }
    },
  
    // Customize webpack config if needed
    webpack: (config) => {
      // Add markdown file handling
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
  
      return config
    }
}
  
module.exports = nextConfig