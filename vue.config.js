module.exports = {
  devServer: {
    port: 10001,
    open: false,
    proxy: {
      "/form_manage": {
        target: "http://192.168.1.100:9005",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/form_manage": ""
        }
      }
    }
  }
};
