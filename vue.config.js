const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // Import path module

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'), // Define alias for components
      },
    },
  },
});