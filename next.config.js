module.exports = {
  images: {
    domains: ['www.inxeption.com']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // require('./scripts/generate-sitemap');
      //require('./scripts/generate-html-sitemap');
    }

    return config;
  }
};
