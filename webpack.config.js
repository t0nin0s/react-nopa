const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const src = resolve(__dirname, 'src')

module.exports = {
  entry: `${src}/index.js`,
  output: {
    path: resolve(__dirname,'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      // set up standard-loader linting as a preloader
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      // set up babel-loader
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      // set up CSS modules
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ["css-loader?modules,localIdentName='[name]-[local]-[hash:base64:6],camelCase"]
      })
    },{
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader?limit=10000&name=images/[name]-[hash:base64:6].[ext]',
      exclude: /node_modules/
    }]
  },
  plugins: [
    // html-webpack-plugin will generate HTML5 that includes webpack bundles in the body with script tags
    new HtmlWebpackPlugin({
      template: `${src}/index.html`
    }),
    new ExtractTextPlugin('style.css'),
    new DashboardPlugin()
  ]
}
