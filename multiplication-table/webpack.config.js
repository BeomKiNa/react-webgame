const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval", // prodection: hidden-source-map

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
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], // https://github.com/browserslist/browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
