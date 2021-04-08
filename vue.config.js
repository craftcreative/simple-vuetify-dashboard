module.exports = {
  devServer: {
  proxy: {
    "/api": {
      target: "http://[::1]:4000/api/",
      changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          },
    },
    "/spotify": {
      target:"https://api.spotify.com/",
      changeOrigin: true,
          pathRewrite: {
            '^/spotify': ''
          },
    }
  }
},
  "transpileDependencies": [
    "vuetify"
  ]
};
