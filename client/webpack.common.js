require('babel-polyfill');

const path = require('path');
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: { 
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(ttf(\?v=\d+\.\d+\.\d+)?$)/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.(svg(\?v=\d+\.\d+\.\d+)?$)/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(js|jsx|css)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-decorators-legacy'],
        presets: ['env', 'react']
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      query: {
        configFile: path.join(__dirname, '.eslintrc.json')
      }
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000
      }
    }]
  },
  resolve: {
    alias: {
      Source: path.join(__dirname, '/src'),
      Tests: path.join(__dirname, '/tests'),
      Shared: path.join(__dirname, '/src/components/shared'),
      Actions: path.join(__dirname, '/src/actions'),
      Reducers: path.join(__dirname, '/src/reducers'),
      Common: path.join(__dirname, '/src/common'),
      Store: path.join(__dirname, '/src/store'),
      Configure: path.join(__dirname, '/src/components/containers/configure'),
      Login: path.join(__dirname, '/src/components/containers/login'),
      Workspace: path.join(__dirname, '/src/components/containers/workspace')
    },
    extensions: ['.js', '.jsx', '.css', '.json'],
    symlinks: false
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets/img',
      to: 'assets/img'
    }]),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html'),
      title: 'React-Redux'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: false,
          fix: false,
          quiet: false,
          configFile: path.join(__dirname, '.eslintrc.json')
        }
      }
    })
  ]
};