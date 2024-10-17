/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://seepbackend.onrender.com/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
