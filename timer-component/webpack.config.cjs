const path = require("path");

module.exports = (_, argv) => ({
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  devtool: 'source-map', 
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
