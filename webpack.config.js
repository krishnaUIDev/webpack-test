const path = require("path");
const TerserPlugin = require("terser-webpack-plugin"); // to minifiy bundle size
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js", //entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/", //to check images if its real time then we have to use http://google.com/
  }, //output file name and filter path
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(xml)$/,
        use: ["xml-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin(), // to decrese bundle size
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};
