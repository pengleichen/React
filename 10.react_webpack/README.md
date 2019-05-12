<h1>webpack构建react应用入门</h1>
<h2>1. 下载相关模块包</h2>
* 创建package.json
  ```
  yarn init
  ```
* react相关库
  ```
  yarn add react react-dom
  ```
* babel相关库
  ```
  yarn add @babel/core @babel/preset-env @babel/preset-react -D
  ```
* webpack相关库
  ```
  yarn add webpack webpack-cli webpack-dev-server -D
  yarn add clean-webpack-plugin html-webpack-plugin -D
  ```
<h2>2. webpack配置文件：webpack.config.js</h2>
  ```javascript
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
      output: {
        filename: 'bundle.js',
        path: resolve('dist')
      }
    }
  ```
<h2>3. babel配置文件：.babelrc</h2>
  ```json
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```
<h2>4. 编码</h2>
  * src/js/App.js: 应用组件
  ```javascript
    import React, {Component} from 'react'
    
    class App extends Component {
      constructor(props) {
        super(props)
      }
    
      render() {
        return (
          <div>
            我是App入口组件
          </div>
        )
      }
    }
    
    export default App
  ```  
  * ./src/main.js: 主模块
  ```javascript
    import React from 'react'
    import ReactDOM from 'react-dom'
    
    import App from './components/App'
    
    import './assets/css/style.css'
    
    let div = document.createElement('div')
    div.id = 'app'
    document.body.insertBefore(div, document.body.firstChild)
    
    ReactDOM.render(
      <App />
      , document.querySelector('#app')
    )
  ```
<h2>5. 下载 loader</h2>
  ```
    yarn add style-loader css-loader babel-loader -D
  ```
  * 添加CSS文件：src/assets/css/style.css
  ```css
    body {
      background-color: pink;
    }
  ```
  * 在webpack的配置文件中添加module - rules
  ```
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
  ```
<h2>6. 配置webpack-dev-server</h2>
  ```
    devServer: {
      contentBase: resolve('dist'),
      port: 3300,
      hot: true
    }
  ```
<h2>7. 在package.json中添加编译/运行脚本</h2>
  ```json
    "scripts": {
      "build": "webpack",
      "start": "webpack-dev-server --open"
    }
  ```
<h2>8. 执行运行命令，运行项目</h2>
  ```
    yarn start
  ```  
<h2>PS: 完整的webpack.config.js文件</h2>
```javascript
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
```
  