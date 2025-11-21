import type { NextConfig } from 'next';

const mediaHost = process.env.WP_MEDIA_HOST || 'localhost';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: mediaHost,
      },
      {
        protocol: 'http',
        hostname: mediaHost,
      },
      new URL('https://cms.5flowtech.com/**'),
    ],
  },
};

export default nextConfig;
