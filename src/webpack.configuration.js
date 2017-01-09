/* eslint-disable filenames/match-regex */

import path from 'path';

export default {
  context: __dirname,
  entry: {
    app: [
      path.resolve(__dirname, './app')
    ]
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './app'),
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loaders: [
          {
            loader: 'style-loader',
            query: {
              sourceMap: 1
            }
          },
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
              localIdentName: '[path]___[name]___[local]',
              modules: 1
            }
          }
        ],
        test: /\.css$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};
