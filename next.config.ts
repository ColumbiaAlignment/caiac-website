/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Optional: prevents Next.js from forcing image optimization
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // standalone for docker
  output: "standalone",

};

module.exports = nextConfig;