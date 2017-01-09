import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfiguration from '../webpack.configuration';

const compiler = webpack(webpackConfiguration);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  stats: 'minimal'
}));

app.get('/', (req, res) => {
  res.send(`
  <!doctype html>
  <html>
    <head></head>
    <body>
      <div id='app'></div>

      <script src='/static/app.js'></script>
    </body>
  </html>
  `);
});

app.listen(8000);
