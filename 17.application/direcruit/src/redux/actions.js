import { reqLogin, reqRegister } from '../api'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
const errorMsg = msg => ({ type: ERROR_MSG, data: msg })

export const register = user => {
  const {username, password, confirmPassword} = user
  if (!username || !password) {
    return errorMsg('用户名或密码是必须的！')
  } else if (password !== confirmPassword) {
    return errorMsg('两次密码输入必须一致！')
  }
  return async dispatch => {
    const { data } = await reqRegister(user)
    if (data.code === 0) {
      dispatch(authSuccess(user))
    } else {
      dispatch(errorMsg(data.msg))
    }
  }
}

export const login = user => {
  const {username, password} = user
  if (!username || !password) {
    return errorMsg('用户名或密码是必须的！')
  }
  return async dispatch => {
    const { data } = await reqLogin(user)
    if (data.code === 1) {
      dispatch(authSuccess(user))
    } else {
      dispatch(errorMsg(data.msg))
    }
  }
}