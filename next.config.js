module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");

module.exports = withPlugins(
    [optimizedImages],
    [
      withPWA({
        pwa: {
          dest: "public",
        },
      }),
    ],
    {
      distDir: '../../dist/client',
    }
);
