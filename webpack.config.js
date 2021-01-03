const path = require('path')
module.exports = {
  // 环境
  mode: 'production',
  // 输入
  entry: {
    index: './lib/index.tsx' // 当前入口文件
  },
  // 输出
  output: {
    path: path.resolve(__dirname,'dist/lib'),//输出库的路径
    library: 'FUI',//库的名字
    libraryTarget: 'umd'//库的格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 如果知道解析的是tsx文件
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}