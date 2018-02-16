const path = require("path");

console.log(path);
console.log(__dirname);

module.exports = {
  entry: "./src/",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename:"test.bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
  }
};
