const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const WebpackHtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(path.join(__dirname, '..', 'src/index.js'))
  ],
  output: {
    path: path.resolve(path.join(__dirname, '..', 'dist/')),
    pathinfo: true,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    fallback: path.resolve(path.join(__dirname, '..', 'src/')),
    extensions: ['', '.js', '.css', '.scss', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        loader: 'style!css!postcss!sass',
        exclude: /node_modules/
      }, {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin([
      'NODE_ENV',
      'BUILD_ENV',
      'BUILD_MODE'
    ]),
    new WebpackHtmlPlugin({
      title: 'Qiscus Web Widget Lib',
      template: path.resolve(path.join(__dirname, '..', 'src/index.html')),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.bail = true
  config.devtool = 'source-map'
  config.output.filename = '[name].[chunkhash:8].js'
  config.output.chunkFilename = '[name].[chunkhash:8].chunk.js'
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  config.plugins.push(new webpack.optimize.DedupePlugin())
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    mangle: {
      screw_ie8: true
    },
    output: {
      comments: false,
      screw_ie8: true
    }
  }))
}

if (process.env.NODE_ENV === 'development') {
  config.entry.main.unshift('webpack-hot-middleware/client')
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
