const express = require('express');
const webpack = require('webpack');
const webPackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webPackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000, () => {
  console.log('Example app blistering in port 3k');
});
