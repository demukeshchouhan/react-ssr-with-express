const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./baseConfig.js");

const clientConfig = {
  name: "client",
  entry: {
    client: ["@babel/polyfill", "./src/client.js"]
  },
  target: "web",

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

module.exports = merge(baseConfig, clientConfig);
