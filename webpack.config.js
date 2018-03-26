// npx webpack --config webpack.config.js
// 通过向 npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：npm run build -- --colors。
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'HtmlStrReplace', // 暴露library
    libraryTarget: 'umd' //libraryTarget 控制 library 如何以不同方式暴露的选项(var this window umd)。
  },
  plugins: [
    // tree shaking
    // new UglifyJSPlugin()
  ]
}
