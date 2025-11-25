/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Puedes ajustar esto según tus necesidades
    unoptimized: false,
  },
  async rewrites() {
    return [
      { source: '/plantillas', destination: '/dashboard/index.html' },
      { source: '/dashboard', destination: '/dashboard/index.html' },
    ];
  },
};

export default nextConfig;
