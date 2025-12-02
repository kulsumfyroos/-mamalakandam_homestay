/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'www.gstatic.com', 'ci3.googleusercontent.com', 'res.cloudinary.com', 'www.iguazuurbanhotel.com', 'encrypted-tbn0.gstatic.com', 'images.unsplash.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
