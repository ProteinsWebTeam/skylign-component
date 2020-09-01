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
  devtool: 'eval-source-map',
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
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
                localIdentName: '[local]__[hash:base64:5]'
            },
            sourceMap: true,
          }
        }],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
}
