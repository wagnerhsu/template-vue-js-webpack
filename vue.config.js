const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerPort: 'auto',
    },
  },
});
