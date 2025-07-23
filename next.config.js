/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint during Vercel builds
  },
};

module.exports = nextConfig;
