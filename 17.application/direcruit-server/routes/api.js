var express = require('express')
var router = express.Router()
/*
用户注册
1. path为：/register
2. 请求方式为POST
3. 接收username和password, type参数
4. admin是已注册用户
5. 注册成功返回：{code: 0, data: {_id: 'abc', username: 'xxx'}
6. 注册失败返回：{code: 1, msg: '此用户不存在'}
 */
/*
router.post('/register', function(req, res) {
  //1. 获取请求参数
  const {username, password, type} = req.body
  if (username === 'admin') {
    res.send({code: 1, msg: '此用户已存在'})
  } else {
    res.send({code: 0, data: {_id: 'abc', username}})
  }
});
*/
const {UserModel} = require('../db/models')
const md5 = require('blueimp-md5')
// 注册路由
router.post('/register', (req, res) => {
  console.log(`register ... ${req.body}`)
  const {username, password, type} = req.body
  // 判断用户是否存在，如果存在，返回提示错误信息
  UserModel.findOne({username}, (error, user) => {
    console.log(username)
    if (username === 'admin' || user) {
      res.send({code: 1, msg: '此用户已存在'})
    } else {
      const userModel = new UserModel({username, type, password: md5(password)})
      userModel.save((error, user) => {
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7})
        res.send({code: 0, data: {_id: user._id, username, type}})
      })
    }
  })

})
// 登录路由
router.post('/login', (req, res) => {
  console.log(`login ... ${req.body}`)
  const {username, password} = req.body
  UserModel.findOne({username, password: md5(password)}, (error, user) => {
    if (user) {
      const {_id, type} = user
      res.send({code: 0, data: {_id, username, type}})
    } else {
      res.send({code: 1, msg: '用户名或密码错误！'})
    }
  })
})

module.exports = router
