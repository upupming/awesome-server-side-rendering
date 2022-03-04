/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.optimization.minimize = false
    return config
  },
  productionBrowserSourceMaps: false
}

module.exports = nextConfig
