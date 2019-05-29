/*
包含n个操作数据库集合数据的Model模块
1. 连接数据库
2. 定义对应的Model
 */
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/direcruit", {
  useNewUrlParser: true,
  useFindAndModify: true
})

const conn = mongoose.connection
conn.on('connected', () => console.log('DB connected successfully!'))

/* user schema */
const userSchema = mongoose.Schema({
  username: {type: String, required: true}, // 用户名
  password: {type: String, required: true}, // 密码
  type: {type: String, required: true}, // 用户类型：dashen/laoban
  header: {type: String}, // 头像名称
  post: {type: String}, // 职位
  info: {type: String}, // 个人或职位简介
  company: {type: String}, // 公司名称
  salary: {type: String} // 月薪
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel

/* user schema */