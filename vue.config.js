module.exports = {
  devServer: {
    // 端口号
    port: 8080,
    // 配置不同的后台API地址
    proxy: {
      '/api': {
        target: 'http://localhost:8010/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
  }
}