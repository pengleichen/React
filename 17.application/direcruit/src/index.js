/*
入口JS文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import {HashRouter, Route, Switch} from 'react-router-dom'
import Register from './containers/register/Register'
import Login from './containers/login/Login'
import Main from './containers/main/Main'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
  , document.querySelector('#root')
)
