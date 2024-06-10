const { execFile } = require("child_process");
const path = require("path");

module.exports = (_, argv) => ({
  entry: "./index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        resolve: {
            fullySpecified: false,
        }
      },
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
});
