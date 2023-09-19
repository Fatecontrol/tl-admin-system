import type { DefineComponent } from 'vue'
// 定义组件名称和组件类型的映射关系
export type ComponentMap = {
  name: string
  componentName: DefineComponent<{}, {}, any>
}

// 定义登录表单的数据类型
export type PhoneCodeForm = {
  phone: string
  smscode: string
  imgcode: string
  savePhone: boolean
}
// 定义账号密码登录的表单数据类型
export type AccountForm = Pick<PhoneCodeForm, 'imgcode'> & {
  password: string
  username: string
  saveUserName?: boolean
  saveUserPass?: boolean
}
