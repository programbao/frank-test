const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// Object.assign：将第二个参数添加到第一个对象里面，然后将第三个参数添加到第一个对象中
module.exports = Object.assign({}, base, {
  // 环境
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
})