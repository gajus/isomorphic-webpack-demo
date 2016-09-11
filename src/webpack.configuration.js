import path from 'path';
import webpack from 'webpack';

module.exports = {
  context: __dirname,
  entry: {
    'app': [
      path.resolve(__dirname, './app')
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './app'),
        loader: 'babel',
        test: /\.js$/,
      },
      {
        loaders: [
          {
            loader: 'style',
            query: {
              sourceMap: 1
            }
          },
          {
            loader: 'css',
            query: {
              'modules': 1,
              'importLoaders': 1,
              'localIdentName': '[path]___[name]___[local]'
            }
          },
          'resolve-url'
        ],
        test: /\.css$/
      }
    ]
  }
};
