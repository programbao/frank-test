const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  // 环境
  // mode: 'production',
  // 支持文件
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // 输入
  entry: {
    index: './lib/index.tsx' // 当前入口文件
  },
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist/lib'), //输出库的路径
    library: 'FUI', //库的名字
    libraryTarget: 'umd' //库的格式
  },
  module: {
    rules: [{
      test: /\.tsx?$/, // 如果解析的是tsx文件
      loader: 'awesome-typescript-loader'
    }]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'index.html'
  //   })
  // ],
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: "react",
  //     root: 'React'
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: "react-dom",
  //     root: 'ReactDOM'
  //   }
  // }
}