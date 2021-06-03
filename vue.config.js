const webpack = require("webpack");
const path = require("path");

const CONSTANTS = {
  VUE_APP_POSTS_PER_PAGE: JSON.stringify(process.env.VUE_APP_POSTS_PER_PAGE),
  VUE_APP_REQUEST_CACHE_MAX: JSON.stringify(process.env.REQUEST_CACHE_MAX),
  VUE_APP_REST_ENDPOINT: JSON.stringify(process.env.VUE_APP_REST_ENDPOINT),
  VUE_APP_GA_TRACKING_ID: JSON.stringify(process.env.VUE_APP_GA_TRACKING_ID)
};

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/_variables.scss"),
        path.resolve(__dirname, "./src/assets/scss/_mixins.scss")
      ]
    }
  },
  configureWebpack: {
    plugins: [new webpack.DefinePlugin(CONSTANTS)]
  }
};
