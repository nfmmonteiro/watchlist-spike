var webpack = require('webpack');
var path = require('path');

var webpackConfig = {

  debug: true,

  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor':    './src/vendor.browser.ts',
    'main':       './src/main.browser.ts'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
      { test: /\.css$/, loaders: ['style', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  }
};

module.exports = webpackConfig;
