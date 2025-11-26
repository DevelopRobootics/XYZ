/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Puedes ajustar esto según tus necesidades
    unoptimized: false,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      // Servir directamente las plantillas estáticas (dist/index.html y assets)
      {
        source: "/plantillas/:category/:folder",
        destination: "/plantillas/:category/:folder/dist/index.html",
      },
      {
        source: "/plantillas/:category/:folder/",
        destination: "/plantillas/:category/:folder/dist/index.html",
      },
      {
        source: "/plantillas/:category/:folder/assets/:path*",
        destination: "/plantillas/:category/:folder/dist/assets/:path*",
      },
      {
        source: "/plantillas/:category/:folder/index.css",
        destination: "/plantillas/:category/:folder/dist/index.css",
      },
    ];
  },
};

export default nextConfig;
