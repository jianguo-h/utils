const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.base.config');
const port = 8080;
const url = 'http://localhost:' + port;

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  entry: ['./src/index.js', 'webpack-dev-server/client?' + url, 'webpack/hot/dev-server'],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const compiler = webpack(webpackDevConfig);
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(port, () => {
  console.log('> Listening at ' + url);
});