const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./../package.json').dependencies;

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : {
      loader: 'style-loader',
      options: {
        insert: 'head',
        injectType: 'singletonStyleTag',
      },
    };

module.exports = function (options) {
  return {
    // Entry and Context
    // https://webpack.js.org/configuration/entry-context
    entry: {
      app: './src/index.js',
    },
    // Loaders
    // https://webpack.js.org/loaders
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          // Caching
          // https://javascript.plainenglish.io/how-to-improve-webpack-performance-7637db26fa5f
          options: {
            cacheCompression: false,
            cacheDirectory: true,
          },
          exclude: [/node_modules/, /dist/],
        },
        // Assets
        // https://webpack.js.org/guides/asset-modules/
        //
        // HTML files as source asset
        // https://webpack.js.org/guides/asset-modules/#source-assets
        {
          test: /\.html$/i,
          type: 'asset/source',
          exclude: [/index.html/i],
        },
        // Font files and images as resource asset
        // https://webpack.js.org/guides/asset-modules/#resource-assets
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/,
          use: [stylesHandler, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.scss$/,
          use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.json$/,
          type: 'json',
        },
      ],
    },
    // Plugins
    // https://webpack.js.org/configuration/plugins
    // https://webpack.js.org/plugins
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${__dirname}/../dist/index.html`,
        template: './src/index.html',
        inject: 'body',
        // Minification
        // https://github.com/jantimon/html-webpack-plugin#options
        minify: false,
        chunks: ['vendor', 'vendors', 'commons', 'app'],
        chunksSortMode: 'manual',
      }),
      new ModuleFederationPlugin({
        name: 'qikOrder',
        filename: 'remoteEntry.js',
        remotes: {
          webOrder: `webOrder@${getRemoteEntryUrl(3002)}`,
        },
        exposes: {
          './MenuItem': './src/components/MenuItem',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };
};
