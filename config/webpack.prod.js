const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    desktop: resolve(__dirname, '../src/desktop.js'),
    config: resolve(__dirname, '../src/config.js'),
  },
  output: {
    filename: `js/[name].js`,
    path: resolve(__dirname, '../plugin/dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: { pure_funcs: ['console.log'] },
          },
        }),
    ].filter(Boolean),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
};
