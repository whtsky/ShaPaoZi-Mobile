var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server")
config.plugins.push(new webpack.HotModuleReplacementPlugin())

var app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  },
  hot: true,
  proxy: {
    "/api/*": {target: "http://www.shapaozi.me", host: "www.shapaozi.me"}
  }
})

app.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080')
})
