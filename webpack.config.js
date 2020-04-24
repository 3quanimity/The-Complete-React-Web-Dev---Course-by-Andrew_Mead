// MINIMAL SETUP: entry point -> output final bundle file

const path = require("path");

module.exports = {
  entry: "./src/app.js", // relative path
  output: {
    path: path.join(__dirname, "public"), // absolute path
    filename: "bundle.js",
  },
};
