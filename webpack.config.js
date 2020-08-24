const path = require('path');

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, "src/_tests_"),
      path.join(__dirname, "src")
    ]
  }
}
