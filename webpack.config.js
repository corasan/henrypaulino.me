var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
    // './dist/styles.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
    query: {
      presets: ['react', 'es2015', 'stage-0']
    }
  }
};
