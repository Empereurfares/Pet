// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js'
      }
    },
    plugins: [
      // Add any necessary plugins here
    ]
  }
};
