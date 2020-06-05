module.exports = {
  devServer: {
    // 端口号
    port: 10001,
    // 配置自动启动浏览器
    open: false,
    proxy: {
      "/api": {
        // 后端ip地址及端口
        target: "http://192.168.1.100:8089",
        // 是否跨域
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
