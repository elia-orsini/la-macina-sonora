import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    minimumCacheTTL: 2592000, // 30 days
    formats: ["image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
