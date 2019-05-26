const {override, addBabelPlugin, addLessLoader} = require('customize-cra')

module.exports = override(
  addBabelPlugin(['import', {
    libraryName: 'antd-mobile',
    style: true
  }]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@brand-primary": "#1cae82", // 正常
      "@brand-primary-tap": "#1da57a" // 按下
    }
  })
)
