// 一、连接数据库
// 1. 引入mongoose
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')
// 2. 连接指定数据库
mongoose.connect('mongodb://localhost:27017/direcruit_test', {useNewUrlParser: true, useFindAndModify: false})
// 3. 获取连接对象
const conn = mongoose.connection
// 4. 绑定连接完成的监听
conn.on('connected', () => console.log('数据库连接成功，YE！！'))

// 二、得到对应特定集合的Model
// 1. 定义Schema(描述文档结构）
const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  type: {type: String, required: true},
  header: {type: String}
})
// 2. 定义Model（与集合对应，可以操作集合）
const UserModel = mongoose.model('user', userSchema)// 集合的名称为：users

// 三、通过Model或其实例对集合进行CRUD操作
// 1. 通过Model实例的save()添加数据
function testSave() {
  // 创建UserModel的实例
  const userModel = new UserModel({
    username: 'Bob',
    password: md5('12343'),
    type: 'laoban'
  })
  // 调用save()保存
  userModel.save((error, user) => {
    console.log('save...', error, user)
  })
}

//testSave()
// 2. 通过Mode的find()/findOne()查询多个或者一个数据
function testFind() {
  // 查询多个：得到是包含所有匹配文档对象的数组，如果没有匹配的就是[]
  UserModel.find((error, users) => {
    console.log('find...', error, users)
  })

  // 查询一个：得到是匹配的文档对象，如果没有匹配的就是null
  UserModel.findOne({type: 'dashen'}, (error, user) => {
    console.log('findOne...', error, user)
  })
}

//testFind()
// 3. 通过Model的findOneAndUpdate()更新某个数据
function testUpdate() {
  UserModel.findOneAndUpdate({_id: '5cea9ae991dea7350034e11a'}, {username: 'Tom'}, (error, oldUser) => {
    console.log('update...', error, oldUser)
  })
}

//testUpdate()
// 4. 通过Model的deleteOne()删除匹配的数据
function testDelete() {
  UserModel.deleteOne({_id: '5cea9c24403e7730c8b485e6'}, (error, res) => {
    console.log('remove...', error, res)
  })
}
//testDelete()