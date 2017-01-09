import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {
  renderToString
} from 'react-dom/server';
import {
  createIsomorphicWebpack
} from 'isomorphic-webpack';
import webpackConfiguration from '../webpack.configuration';

const compiler = webpack(webpackConfiguration);

createIsomorphicWebpack(webpackConfiguration);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  stats: 'minimal'
}));

const renderFullPage = (body) => {
  return `
  <!doctype html>
  <html>
    <head></head>
    <body>
      <div id='app'>${body}</div>

      <script src='/static/app.js'></script>
    </body>
  </html>
  `;
};

app.get('/', (req, res) => {
  const appBody = renderToString(require('../app').default);

  res
    .send(renderFullPage(appBody));
});

app.listen(8000);
