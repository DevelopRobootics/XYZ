/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Puedes ajustar esto según tus necesidades
    unoptimized: false,
  },
  swcMinify: false,
  async rewrites() {
    return [
      { source: '/plantillas', destination: '/plantillas/index.html' },
      { source: '/plantillas/:path*', destination: '/plantillas/index.html' },
    ];
  },
};

export default nextConfig;
