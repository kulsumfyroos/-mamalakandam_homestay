/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'www.gstatic.com', 'ci3.googleusercontent.com', 'res.cloudinary.com', 'www.iguazuurbanhotel.com', 'encrypted-tbn0.gstatic.com', 'images.unsplash.com'],
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during builds (speeds up builds)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
