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
  },
  env: {
    NEXT_PUBLIC_H_CAPTCHA_SITE_KEY: process.env.H_CAPTCHA_SITE_KEY,
  }
}

module.exports = nextConfig
