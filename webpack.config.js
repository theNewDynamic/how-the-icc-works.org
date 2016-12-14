const path = require('path')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var Css = require('css-loader?minimize!./index.css')

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: {
    app: './webpack/entry.js'
    // tachyons: 'tachyons/css/tachyons.css',
    // index: './src/_app/css/main.css'
  },
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    path: path.join(__dirname, '/src/assets/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // ‘babel-loader’ is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
}
