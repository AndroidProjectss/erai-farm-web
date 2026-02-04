/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';

// For GitHub Pages "project" sites, the app is served from /<repo>.
// For a "user/org" site (<org>.github.io), basePath should be empty.
const isUserOrOrgPagesRepo = repoName.endsWith('.github.io');
const basePath = isGitHubActions && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : '';

const nextConfig = {
  // GitHub Pages supports only static hosting.
  output: 'export',
  trailingSlash: true,

  basePath,
  assetPrefix: basePath,

  // next/image optimization requires a server; disable for static export.
  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Включаем React Strict Mode для лучшей отладки
  reactStrictMode: true,
  // Сжатие
  compress: true,
  // Удаляем X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;
