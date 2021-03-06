const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    index: './src/index'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    globalObject: "this",
    libraryTarget: 'umd',
    library: 'ontime-eventemitter',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
};
