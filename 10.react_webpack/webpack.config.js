const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack Demo'
    }),
    new CleanWebpackPlugin({
      path: resolve('dist')
    })
  ],
  devServer: {
    contentBase: resolve('dist'),
    port: 3300,
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)|(bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}