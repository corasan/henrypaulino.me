var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

// Dev server with hot reload enabled
const port = process.env.PORT || 4000;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true}
}).listen(4000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${port}`);
});
