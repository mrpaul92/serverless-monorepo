const slw = require("serverless-webpack");

module.exports = {
  target: "node",
  entry: slw.lib.entries,
  mode: slw.lib.webpack.isLocal ? "development" : "production",
  node: false,
  optimization: {
    minimize: false,
  },
  devtool: "inline-cheap-module-source-map",
};
