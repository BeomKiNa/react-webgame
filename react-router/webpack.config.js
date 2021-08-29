const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "react-router",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults", debug: true }],
              "@babel/preset-react",
            ],
            plugins: ["react-refresh/babel"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },

  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true, // react-router 새로고침할 때 페이지를 가져오기 못하는 Cannot get ~ 상황을 위해서 추가 HashRouter는 이 문제가 발생하지 않음
    publicPath: "/dist/",
  },
};
