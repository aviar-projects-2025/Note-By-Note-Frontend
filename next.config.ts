/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tree-shake framer-motion and lucide — removes unused exports at build time
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Serve images as WebP/AVIF automatically, no code changes needed
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allow Unsplash remote images with Next.js <Image> optimisation
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Compress all responses
  compress: true,

  // Strip console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
