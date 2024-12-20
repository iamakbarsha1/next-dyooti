import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // turboMode: true, // Enable Turbopack (experimental bundler for faster builds)
  experimental: {
    // turboMode: false, // Disable Turbopack and use Webpack instead
  },
};

export default nextConfig;
