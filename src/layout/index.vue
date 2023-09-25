<template>
  <el-container class="layout-container">
    <el-aside :width="asideWidth">
      <ComAside />
    </el-aside>
    <el-container>
      <el-header>
        <ComHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import ComHeader from './components/ComHeader/index.vue'
import ComAside from './components/ComAside/index.vue'
import { computed } from 'vue'
import { useMenuStore } from '../stores'
const store = useMenuStore()
const asideWidth = computed(() => {
  return store.asideWidth
})
</script>

<style lang="scss" scoped>
.el-aside::-webkit-scrollbar {
  width: 0;
}
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: var(--junjun-topbar-bg);
    transition: width 0.4s linear;
    border-right: 1px solid grey;
  }
  .el-header {
    height: 60px;
    padding: 0 10px;
    background: var(--junjun-topbar-bg);
  }
  .el-main {
    padding: 10px;
    height: calc(100vh - 60px);
    background: var(--el-bg-color-page);
  }
}
</style>
