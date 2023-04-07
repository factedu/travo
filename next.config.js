/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'avatars.githubusercontent.com',
    ],
  }
}

module.exports = nextConfig
