<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu"
      text-color="#ccc"
      router
      background-color="#23262E"
      :collapse="isCollapse"
    >
      <MenuItem :menu="menuData"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useMenuStore } from '../../../../stores'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getMenuData } from '@/api/user'
import { useTagsStore } from '../../../../stores'
import type { MenuResponseType } from '@/types/menu'
const store = useMenuStore()
const tagsStore = useTagsStore()
const route = useRoute()

// 获取白名单
const isTags = (path: string) => {
  const whiteList = ['/login', '/404', '/401']
  return whiteList.includes(path)
}

// 监听路由
watch(
  route,
  (to) => {
    // 判断 如果是登录 404 401 不让显示
    if (isTags(to.path)) return
    const { fullPath, meta } = to

    if (!fullPath || !meta.icon || !meta.title) return

    tagsStore.addTagsViewList({
      name: meta.title as string,
      path: fullPath,
      icon: meta.icon as string
    })
  },
  {
    immediate: true,
    deep: true
  }
)

const isCollapse = computed(() => {
  return store.getMenuStatus()
})

const menuData = ref<MenuResponseType[]>([])

const getMenuList = async () => {
  const menuRes = await getMenuData()
  menuData.value = menuRes.data!
}
getMenuList()
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;

  .el-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
