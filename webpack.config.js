const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  console.log({ env });
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
