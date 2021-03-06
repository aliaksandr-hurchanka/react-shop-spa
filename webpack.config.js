'use strict'

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, '/public'),
    hot: true,
    historyApiFallback: true
  }
}
