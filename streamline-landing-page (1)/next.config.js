/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ],
      },
    ]
  },
  images: {
    domains: ['www.youpursue.org', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  }
}

module.exports = nextConfig 