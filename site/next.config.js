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
  
    // Add trailing slash for static export
    trailingSlash: true,
  
    // Customize webpack config if needed
    webpack: (config) => {
      // Add markdown file handling
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
  
      return config
    },

    // Enable build cache
    distDir: process.env.NODE_ENV === 'development' ? '.next' : 'build'
}
  
module.exports = nextConfig