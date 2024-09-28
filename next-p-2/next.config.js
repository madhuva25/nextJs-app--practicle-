/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `tls` module
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          tls: false,
        };
      }
  
      return config;
    },
  };

