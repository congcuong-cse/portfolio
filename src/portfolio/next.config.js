const withCSS = require('@zeit/next-css');
/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  exportPathMap: defaultPathMap => ({
    '/': { page: '/' },
  }),
  // assetPrefix: '/portfolio',
  webpack: config =>
    // config.output.publicPath = `/portfolio${config.output.publicPath}`;
    config,
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
