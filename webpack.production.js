import path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";
import merge from "webpack-merge";
const baseConfig = require("./baseConfig.js");

var serverConfig = {
  name: "server",
  entry: {
    client: ["@babel/polyfill", "./src/server.js"]
  },
  target: "node",
  externals: [nodeExternals()],

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ]
  }
};

module.exports = merge(baseConfig, serverConfig);
