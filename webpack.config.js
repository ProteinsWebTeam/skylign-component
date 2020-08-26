const path = require("path");

module.exports = {
  // entry: "./src/index.js",
  // output: {
  //   library: "skylign",
  //   libraryTarget: 'umd',
  //   libraryExport: 'default',
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: "skylign.js",
  // },
  //plugins: [ new MiniCssExtractPlugin() ],
  devServer: {
    // contentBase: [
    //   path.join(__dirname, "dist")
    // ],
    port: 8765,
    overlay:{
      warnings: true,
      errors: true
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: [ MiniCssExtractPlugin.loader, 'css-loader'],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
