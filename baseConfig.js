var path = require("path");
var webpack = require("webpack");

const ROOT_DIR = path.resolve(__dirname, "..");
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const SRC_DIR = resolvePath("src");
const BUILD_DIR = resolvePath("build");
const isDebug = !process.argv.includes("--release");
console.log(isDebug);

module.exports = {
  output: {
    path: resolvePath(BUILD_DIR, "public/assets"),
    filename: isDebug ? "[name].js" : "[name].[chunkhash:8].js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.(eot|ttf|wav|mp3|svg|woff|woff2|ico|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [{ loader: "svg-inline-loader" }]
      },
      {
        test: /\.txt$/,
        use: [{ loader: "raw-loader" }]
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve(SRC_DIR, "actions"),
      components: path.resolve(SRC_DIR, "components"),
      services: path.resolve(SRC_DIR, "services"),
      commonStyles: path.resolve(SRC_DIR, "commonStyles")
    }
  }
};
