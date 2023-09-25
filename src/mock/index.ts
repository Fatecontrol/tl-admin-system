import Mock from 'mockjs'
const Random = Mock.Random

import './MenuData'

// 导入数据
import user from './userData'

// 登录接口
Mock.mock('/api/login/username', (options: any) => {
  console.log('options', options)
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }
  const params = JSON.parse(options.body)
  if (!params || !params.username || !params.password || !params.imgcode) {
    return {
      code: 101,
      message: '参数错误'
    }
  }
  if (params.username === 'admin' && params.password === '123456') {
    return {
      code: 888,
      message: '成功',
      data: user.userInfo,
      token: Random.string(64)
    }
  }

  return {
    code: 102,
    message: '用户名或密码错误'
  }
})
