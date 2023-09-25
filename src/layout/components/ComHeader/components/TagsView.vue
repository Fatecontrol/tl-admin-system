<template>
  <div class="tag">
    <div
      class="tag-item"
      v-for="(item, index) in tagsList"
      :key="item.path"
      @click="handleToView(item.path)"
      :class="{ active: item.path === $route.path }"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon class="close" v-if="index !== 0" @click.stop="handleCloseTag(item, index)">
        <Close />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagsType } from '@/types/tags'
import { useTagsStore } from '@/stores'
import { useRouter } from 'vue-router'
import { Close } from '@element-plus/icons-vue'
const router = useRouter()
const store = useTagsStore()

const tagsList = computed(() => {
  return store.tagsViewList
})
const handleToView = (path: string) => {
  router.push(path)
}
const handleCloseTag = (item: TagsType, index: number) => {
  const lastIndex = store.tagsViewList.length - 1
  const isLast = index === lastIndex
  const path = store.tagsViewList[index].path
  store.removeTagsView({
    index,
    type: isLast ? 'last' : 'notLast',
    path: item.path
  })
  if (isLast) {
    const lastPath = store.tagsViewList[lastIndex - 1].path
    handleToView(lastPath)
  } else if (item.path === path) {
    handleToView(store.tagsViewList[index].path)
  } else {
    handleToView(store.tagsViewList[index].path)
  }
}
</script>

<style lang="scss" scoped>
.tag::-webkit-scrollbar {
  height: 0;
}

.tag {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ccc;
  padding-left: 25px;
  overflow-x: auto;

  .tag-item {
    padding: 5px 10px;
    border-radius: 30px;
    margin: 0 5px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    .el-icon {
      margin-right: 5px;
    }
    .close {
      margin-left: 5px;
    }
    &:hover {
      background-color: #409eff;
      color: #fff;
    }
  }
}
.tag-item.active {
  background-color: #409eff;
  color: #fff;
}
</style>
