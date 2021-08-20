const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "lotto-dev",
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
    open: true,
    hot: true,
    publicPath: "/dist/",
  },
};
