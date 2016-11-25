var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', './server.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: "style!css!sass"
      }
    ],
    query: {
      presets: ['react', 'es2015', 'stage-0']
    }
  }
};
