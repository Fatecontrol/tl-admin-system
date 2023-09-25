<template>
  <div class="logo__page">
    <span v-if="!isMenuStatus">通用后台管理系统</span>
    <img :src="logo" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '../../../../stores'
const logo = new URL('../../../../assets/logo.svg', import.meta.url).href
const store = useMenuStore()
const isMenuStatus = computed(() => {
  return store.getMenuStatus()
})
</script>

<style lang="scss" scoped>
.logo__page {
  height: 50px;
  background-color: var(--junjun-topbar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  > img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
}
</style>
