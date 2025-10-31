/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static export so the site can be hosted on GitHub Pages.
   */
  output: 'export',
  /**
   * Your GitHub Pages project name. This makes the app available at
   * https://<username>.github.io/resume1/ rather than the domain root.
   */
  basePath: '/resume1',
  assetPrefix: '/resume1',
  /**
   * Generate folder-style routes (index.html) compatible with static hosting.
   */
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
