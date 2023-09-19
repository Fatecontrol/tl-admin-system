import { ref } from 'vue'
import type { PhoneCodeForm } from '../types/login-type'
import utils from '@/utils/utils'
/**
 * 获取短信验证码以及倒计时
 * @param loginForm
 */
export function useGetPhoneCode(loginForm: PhoneCodeForm) {
  // 获取短信验证码
  let timer: number
  const currentTime = ref(0)
  const smsCodeBtnText = ref('获取验证码')
  const disabled = ref(false)
  const getSmsCode = () => {
    // TODO 调用获取短信验证码接口
    if (!loginForm.phone) {
      utils.showError('请输入手机号')
      return
    }
    disabled.value = true
    currentTime.value = 60
    smsCodeBtnText.value = `${currentTime.value}秒后重新获取`
    timer = setInterval(() => {
      currentTime.value--
      smsCodeBtnText.value = `${currentTime.value}秒后重新获取`
      if (currentTime.value <= 0) {
        disabled.value = false
        smsCodeBtnText.value = '获取验证码'
        clearInterval(timer)
        timer = 0
      }
    }, 1000)
  }
  return {
    smsCodeBtnText,
    disabled,
    getSmsCode
  }
}
/**
 * 记住用户名功能
 * @param loginForm
 */
export function useHandleSaveUser(loginForm: PhoneCodeForm) {
  const saveLocalUser = () => {
    if (loginForm.savePhone) {
      // 1. 将用户名存储到本地
      utils.saveData('phone', loginForm.phone)
      // 2. 将保存的状态存储到本地
      utils.saveData('savePhone', loginForm.savePhone)
    } else {
      utils.removeData('phone')
      utils.removeData('savePhone')
    }
  }
  const getLocalUser = () => {
    loginForm.savePhone = utils.getData('savePhone')
    if (loginForm.savePhone) {
      // console.log('utils', utils.getData('username'))
      loginForm.phone = utils.getData('phone')
    }
  }
  return {
    saveLocalUser,
    getLocalUser
  }
}
