/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssCustomMedia = require('postcss-custom-media');
const pxtorem = require('postcss-pxtorem');
/* eslint-enable */

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components')
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.jpg'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: __dirname + '/src/assets/css/style.css'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssCustomMedia(),
                  pxtorem({
                    rootValue: 10,
                    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 0
                  })
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: './src/assets/css/style.css'
    })
  ]
};
