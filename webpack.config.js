const path = require("path");

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
        use: ["style-loader", "css-loader", "sass-loader"],
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
};
