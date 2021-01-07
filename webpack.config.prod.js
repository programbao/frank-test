const base = require('./webpack.config')
// Object.assign：将第二个参数添加到第一个对象里面，然后将第三个参数添加到第一个对象中
module.exports = Object.assign({}, base, {
  // 环境
  mode: 'productment',
  // 打包不要的文件--外部包
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: "react",
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: "react-dom",
      root: 'ReactDOM'
    }
  }
})