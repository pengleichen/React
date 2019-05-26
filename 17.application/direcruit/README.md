# React App 前端开发
## 1. 准备工作
### 移动端点击事件延迟3s通过引入FastClick解决：
在首页index.html加入：
```html
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body)
      }, false)
    }
    if (!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise.min.js"><\/script>')
    }
  </script>
```
### 安装antd-mobile
`yarn add antd-mobile`
### 使用按需导入
+ 安装babel-plugin-import, [react-app-rewired](https://github.com/timarney/react-app-rewired), [customize-cra](https://github.com/arackaf/customize-cra)
  `yarn add babel-plugin-import react-app-rewired customize-cra -D`
+ 在应用主目录创建config-overrides.js，其内容如下
  ```javascript
  const {override, addBabelPlugin} = require('customize-cra')
  module.exports = override(
    addBabelPlugin(['import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }])
  )
  ```
+ 修改package.json中的scripts，如下
  ```json
  {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject",
    "serve": "serve build"
  }
  ```
+ 自定义主题
  1. 安装less，less-loader<br>
  `yarn add less less-loader -D`<br>
  2. 修改config-overrides.js
    ```javascript
    const {override, addBabelPlugin, addLessLoader} = require('customize-cra')
    
    module.exports = override(
      addBabelPlugin(['import', {
        libraryName: 'antd-mobile',
        style: true
      }]),
      addLessLoader({
        modifyVars: {
          "@brand-primary": "#1cae82", // 正常
          "@brand-primary-tap": "#1da57a" // 按下
        }
      })
    )
    ```
+ 添加路由react-router-dom<br>
    `yarn add react-router-dom`    
+ 引入redux<br>
  * 下载相关依赖包
  ```
  yarn add redux react-redux redux-thunk
  yarn add redux-devtools-extension -D
  ```    