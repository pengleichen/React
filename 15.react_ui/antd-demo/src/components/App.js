import React, {Component} from 'react'

import {Button} from 'antd'

//import 'antd/dist/antd.css'
/*
可以按需加载CSS样式：
1. 执行yarn eject
2. 删除node_modules之后再次执行 yarn install
3. 执行 yarn add babel-plugin-import
4. 修改config/webpack.config.js中的babel-loader中的options，添加一个plugins解析
5. 修改如下：
    plugins: [
    ...,
      [
        require.resolve('babel-plugin-import'),
        {
          libraryName: 'antd',
          style: 'css'
        }
      ],
      ...
    ]
 */

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  }
}

export default App