/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Включаем React Strict Mode для лучшей отладки
  reactStrictMode: true,
  // Сжатие
  compress: true,
  // Удаляем X-Powered-By header
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'erai.kg',
          },
        ],
        destination: 'https://www.erai.kg/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
