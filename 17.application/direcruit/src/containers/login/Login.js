/*
登录组件
 */
import React, {Component} from 'react'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/Logo'


class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  login = () => {
    console.log(this.state)
  }

  handleChange = (name, val) => this.setState({
    [name]: val
  })

  toRegister = () => this.props.history.replace('/register')

  render() {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder="请输入密码" onChange={val => this.handleChange('password', val)}
                       type="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <Button type="primary">登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login