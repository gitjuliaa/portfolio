import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  // REMOVE the experimental runtime: 'edge' line from here
};

export default nextConfig;