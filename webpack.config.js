const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/assets/js/app.js",
  output: {
    filename: "bundled-script.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundled-styles.css",
    }),
    new HtmlWebpackPlugin({
      title: "index",
      template: "src/index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/images", to: "images" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }, { loader: "sass-loader" }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "images",
            },
          },
        ],
      },
    ],
  },
};
