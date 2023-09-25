<template>
  <div class="header__page">
    <!-- 菜单切换按钮 -->
    <div class="toggle-menu-icon" @click="handleChangeMenu">
      <el-icon v-if="!isMenuStatus"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </div>
    <!-- 标签栏 -->
    <TagsView></TagsView>
    <!-- 工具栏 -->
    <ToolBar></ToolBar>
  </div>
</template>

<script setup lang="ts">
import TagsView from './components/TagsView.vue'
import ToolBar from './components/ToolBar.vue'
import { computed } from 'vue'
import { useMenuStore } from '../../../stores'
const store = useMenuStore()
const isMenuStatus = computed(() => {
  return store.getMenuStatus()
})
const handleChangeMenu = () => {
  store.toggleAsideWidth()
}
</script>

<style lang="scss" scoped>
.header__page {
  display: flex;
  height: 100%;
  align-items: center;
}
.toggle-menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .el-icon {
    color: #ccc;
  }
}
</style>
