const withCSS = require('@zeit/next-css');
const env = require('./env-config');

/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  exportPathMap: defaultPathMap => ({
    '/': { page: '/' },
  }),
  assetPrefix: env['process.env.ASSET_PREFIX'],
});

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
