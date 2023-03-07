const generateRobotsTxt = require('./scripts/generate-robots-txt')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
    }

    return config
  }
}

module.exports = nextConfig
