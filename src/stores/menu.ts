import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useMenuStore = defineStore('menu', () => {
  const asideWidth = ref('260px')

  const toggleAsideWidth = () => {
    asideWidth.value = asideWidth.value === '260px' ? '60px' : '260px'
  }
  const getMenuStatus = () => {
    return asideWidth.value === '260px' ? false : true
  }
  return { asideWidth, toggleAsideWidth, getMenuStatus }
})
