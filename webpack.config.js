const path = require("path");

module.exports = {
  // MINIMAL WEBPACK SETUP: entry point & output final bundle file
  entry: "./src/app.js", // relative path
  output: {
    path: path.join(__dirname, "public"), // absolute path
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // Loader : customise webpack behaviour when loading a file (convert down jsx --to-> js)
        loader: "babel-loader",
        test: /\.js$/, // regular expression to target only files ending with ".js"
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          // allow the use of multiple loaders (in an array)
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  // Source Map
  devtool: "eval-cheap-source-map",
  // Dev Server
  devServer: {
    contentBase: path.join(__dirname, "public"), // absolute path
  },
};
