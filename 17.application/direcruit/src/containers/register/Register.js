import React, {Component} from 'react'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/logo/Logo'

const ListItem = List.Item

class Register extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    type: 'laoban' //dashen/laoban
  }

  register = () => {
    console.log(this.state)
  }

  handleChange = (name, val) => this.setState({
    [name]: val
  })

  toLogin = () => this.props.history.replace('/login')

  render() {
    let {type} = this.state
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
            <InputItem placeholder="请输入确认密码" onChange={val => this.handleChange('confirmPassword', val)} type="password">确认密码：</InputItem>
            <WhiteSpace/>
            <ListItem>
              用户类型：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'dashen'} onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={() => this.handleChange('type', 'laoban')}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type="primary">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register