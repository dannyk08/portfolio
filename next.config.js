/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    minimumCacheTTL: 1500000,
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  env: {
    NEXT_PUBLIC_H_CAPTCHA_SITE_KEY: process.env.H_CAPTCHA_SITE_KEY,
    NEXT_PUBLIC_STAGE_MODE: process.env.STAGE_MODE_ENV,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
}

module.exports = nextConfig
