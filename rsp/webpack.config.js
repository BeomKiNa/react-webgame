const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                  debug: true,
                },
              ],
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
    publicPath: "/dist/",
    hot: true,
  },
};
