import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/experience',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
