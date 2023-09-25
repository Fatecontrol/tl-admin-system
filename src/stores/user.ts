import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LoginResponseType } from '@/types/user'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<LoginResponseType>()
    const token = ref<string>()

    const setToken = (t: string) => {
      token.value = t
    }
    const setuser = (u: LoginResponseType) => {
      userInfo.value = u
    }
    const delToken = () => {
      token.value = ''
    }
    const delUser = () => {
      userInfo.value = undefined
    }
    return { userInfo, token, setToken, setuser, delToken, delUser }
  },
  {
    persist: true
  }
)
