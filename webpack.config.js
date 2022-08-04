const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)();
const { merge } = require("webpack-merge");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log("modeConfig", modeConfig(mode));
  return merge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
