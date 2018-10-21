var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./baseConfig.js");

var serverConfig = {
  entry: "./src/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    publicPath: "/"
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = merge(baseConfig, serverConfig);
