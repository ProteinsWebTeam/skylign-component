const path = require("path");

module.exports - {
  entry: "./src/index.js",
  output: {
    library: "skylign",
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "dist")
    ],
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
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  }
}
