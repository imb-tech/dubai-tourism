import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "*", protocol: "https" },
      {
        protocol: 'http',
        hostname: 'api-dubai.imbtech.uz',
      },
    ]
  }
};

export default nextConfig;
