/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
   unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  trailingSlash: true,

  devIndicators: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  compress: true,
}

export default nextConfig