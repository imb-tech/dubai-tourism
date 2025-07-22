import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: '*', protocol: 'https' },
      {
        protocol: 'http',
        hostname: 'api-dubai.imbtech.uz',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.128',
      },
       {
        protocol: 'http',
        hostname: '192.168.1.128',
      },
    ],
  },
};

export default nextConfig;
