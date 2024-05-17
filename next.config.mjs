/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}
export default withContentlayer({ ...nextConfig })
