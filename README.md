# 事件
## 标准事件
  * 浏览器默认的事件：click, keyup
  * 响应事件：浏览器本身
  * 数据：event对象
## 自定义事件
  * 绑定事件
    * 事件名
    * 数据：event
  * 触发事件
    * 事件名
    * 回调函数：数据
    
## 组件间通信总结
  * 方式一：通过props传递
    * 共同的数据放在父组件上，特有的数据放在自己组件内部（state)
    * 通过props可以传递一般数据和函数数据，只能一层一层传递
    * 一般数据 --> 父组件传递数据给子组件 --> 子组件读取数据
    * 函数数据 --> 子组件传递数据给父组件 --> 子组件调用函数
  * 方式二：使用消息订阅(subscribe)-发布(publish)机制：自定义事件机制
    * 工具库：PubSubJS
    * 下载：yarn add pubsub-js
    * 使用：
    ```javascript
    import PubSub from 'pubsub-js' // 引入
    PubSub.subscribe('delete', (msg, data) => {}) // 订阅
    PubSub.publish('delete', data) // 发布消息
    ```    