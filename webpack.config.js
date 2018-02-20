const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename:"test.bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot:true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()],
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          presets:['env']
        }
      }
    ]
  }
};
