const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type {import('webpack').Configuration} **/
module.exports = {
  // Include những file typescript, javascript trong src và node_modules
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  entry: ["./src/index.tsx"],
  module: {
    rules: [
      // Load file typescript react bằng babel
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Load css bằng style-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Thêm [chunkhash] để thêm hash vào file tránh bị cache bởi cdn nếu trùng file name.
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  // Dev server ở port 3000
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public", "index.html"),
      serveIndex: true,
      watch: true,
    },
  },
  plugins: [
    // Copy mọi files trong folder public trừ file index.html
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          filter: (name) => {
            return !name.endsWith("index.html");
          },
        },
      ],
    }),
    // Plugin hỗ trợ thêm thẻ style và script vào index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
      favicon: "./public/favicon.ico"
    }),
  ],
};
