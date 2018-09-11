'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, '/public'),
    hot: true
  }
}
