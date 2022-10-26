/* eslint-disable global-require */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
const TerserPlugin = require('terser-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sassParser = require('sass');

const distDir = '../dist';
const sliderm = ['./src/index.js', './src/assets/scss/index.scss'];

module.exports = (env, argv) => ({
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  entry: {
    sliderm,
  },
  output: {
    filename: `${distDir}/js/[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|otf|gif|png|jpg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
      {
        test: /\.css|sass|scss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sassParser,
              sassOptions: { outputStyle: 'expanded' },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: `${distDir}/css/[name].css`,
    }),
  ],
});
