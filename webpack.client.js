const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./baseConfig.js");

const clientConfig = {
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

module.exports = merge(baseConfig, clientConfig);
