// TODO: include netlify plugins: https://www.netlify.com/blog/2021/01/25/top-10-netlify-build-plugins-2021-update/
// TODO: 4. Image Optim
// TODO: 6. Next.js Cache
// TODO: 7. Minify HTML
// TODO: 10. Inline Critical CSS

// TODO: add sitemaps https://www.npmjs.com/package/next-sitemap
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
