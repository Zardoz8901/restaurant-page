const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      alwaysWriteToDisk: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
