/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
    experimental: {
      taint: true,
      serverMinification: false,
    },
    compress: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
      if (!dev) {
        // Ensure that other optimization settings are preserved
        config.optimization = {
          ...config.optimization,
          minimize: false,
        };
      }
      // Important: return the modified config
      return config;
    },
};

export default nextConfig;

