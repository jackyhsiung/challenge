const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //
  entry: { index: path.resolve(__dirname, "src", "client", "index.js") },
  output: {
    path: path.resolve(__dirname, "publicBuild")
  },
  // load an HTML template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, 'public', 'favicon.png'),
    })
  ]
};