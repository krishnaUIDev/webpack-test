const path = require("path");

module.exports = {
  entry: "./src/index.js", //entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  }, //output file name and filter path
  mode: "none",
};
