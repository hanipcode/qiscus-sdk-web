const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.use('*', express.static(path.join(__dirname, '..', 'dist/')))

const PORT = 1337
app.listen(PORT, function () {
  console.log(`Listening on => http://localhost:${PORT}`)
})
