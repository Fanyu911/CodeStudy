const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        text: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 8000, //设置端口号
    hot: true,
  },
  mode: "development",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
