const path = require('path');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/azia.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
  outputDir: path.resolve(__dirname, '../server/public'),
};
