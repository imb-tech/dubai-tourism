import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: '*', protocol: 'https' },
      {
        protocol: 'http',
        hostname: 'api-dubai.imbtech.uz',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.127',
      },
    ],
  },
};

export default nextConfig;
