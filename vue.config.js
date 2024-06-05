const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // Add this line to disable linting on save if desired
  configureWebpack: {
    plugins: [
      // add any necessary plugins here
    ]
  }
});
