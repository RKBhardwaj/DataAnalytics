const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    https: false,
    inline: true,
    port: 3000,
    proxy: {
      '/api/' : {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  }
})