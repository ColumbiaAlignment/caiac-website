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

  // Keep links shared before the Fall '26 rename working.
  async redirects() {
    return [
      {
        source: "/events/spring-social",
        destination: "/events/fall-social",
        permanent: true,
      },
    ];
  },

};

module.exports = nextConfig;