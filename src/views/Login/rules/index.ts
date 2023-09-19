import type { FormRules } from 'element-plus'
import { reactive } from 'vue'
// import type { LoginForm } from '../types/login-type'

export const phoneCodeFormRules = reactive<FormRules>({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  smscode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
export const accountFormRules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
