import type { AccountForm } from '../types/login-type'
import utils from '@/utils/utils'

/**
 * 记住用户名功能
 * @param accountForm
 */
export function useHandleSaveUser(accountForm: AccountForm) {
  const saveLocalUserNameOrPas = () => {
    if (accountForm.saveUserName) {
      // 1. 将用户名存储到本地
      utils.saveData('username', accountForm.username)
      // 2. 将保存的状态存储到本地
      utils.saveData('saveUserName', accountForm.saveUserName)
    } else {
      utils.removeData('username')
      utils.removeData('saveUserName')
    }
    if (accountForm.saveUserPass) {
      // 1. 将用户名存储到本地
      utils.saveData('password', accountForm.password)
      // 2. 将保存的状态存储到本地
      utils.saveData('saveUserPass', accountForm.saveUserPass)
    } else {
      utils.removeData('password')
      utils.removeData('saveUserPass')
    }
  }
  const getLocalUserNameOrPas = () => {
    const saveUserName = utils.getData('saveUserName')
    if (saveUserName)
      (accountForm.username = utils.getData('username')),
        (accountForm.saveUserName = utils.getData('saveUserName'))
    const saveUserPass = utils.getData('saveUserPass')
    if (saveUserPass)
      (accountForm.password = utils.getData('password')),
        (accountForm.saveUserPass = utils.getData('saveUserPass'))
  }
  return {
    saveLocalUserNameOrPas,
    getLocalUserNameOrPas
  }
}
