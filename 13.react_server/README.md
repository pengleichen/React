# React服务器渲染入门
* 理解
  * 当服务器端接收到请求时，在服务器端基于React动态渲染页面，并返回给浏览器显示
  * 相对于浏览器端渲染的好处？
    * 服务器端和客户端可以共享某些代码，避免重复定义
    * 首次加载页面速度加快
    * 便于SEO优化。服务器端渲染可以让搜索引擎更容易读取页面的meta信息以及其他SEO相关信息
  * 相对于浏览器端渲染的不好？
    * 对服务器的压力增大
    * 要求服务器使用基于node搭建
* 简单编码实现服务器端渲染
  * 应用文件结构
  ```
  react_server
    |-- src
        |-- App.js ------ 主组件JS
        |-- server.js --- 启动服务器监听，处理请求的JS
    |-- index.js -------- 入口JS
    |-- .babelrc -------- babel配置文件
    |-- package.json ---- 应用包信息文件
  ```