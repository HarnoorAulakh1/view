/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites(path) {
        return [
          {
            source: '/:path*',
            destination: 'https://seepbackend.onrender.com/:path*',
        }
    ]
}
};

export default nextConfig;
