import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {
  createIsomorphicWebpack
} from 'isomorphic-webpack';
import webpackConfiguration from '../webpack.configuration';
import isomorphicMiddleware from '../middlewares/isomorphicMiddleware';

const compiler = webpack(webpackConfiguration);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  stats: {
    assets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false
  }
}));

const {
  createCompilationPromise
} = createIsomorphicWebpack(webpackConfiguration, {
  useCompilationPromise: true
});

app.use(async (req, res, next) => {
  await createCompilationPromise();

  next();
});

app.get('/', isomorphicMiddleware);

app.listen(8000);
