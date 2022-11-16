const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://124.222.212.180:8081',
        secure:false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
})
