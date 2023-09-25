import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TagsType, PayloadType } from '@/types/tags'

export const useTagsStore = defineStore('tags', () => {
  // tagsViewList数据源
  const tagsViewList = ref<TagsType[]>([
    {
      name: '工作台',
      path: '/Index/Home',
      icon: 'Monitor'
    }
  ])

  // 添加数据
  const addTagsViewList = (tag: TagsType) => {
    // 如果tagsViewList里没有当前项 则添加
    const isFind = tagsViewList.value.find((item) => item.path === tag.path)
    if (!isFind) {
      tagsViewList.value.push(tag)
    }
  }

  // 删除数据源
  const removeTagsView = (payload: PayloadType) => {
    // 删除最后一项
    if (payload.type === 'last') {
      // 获取当前非点击的所有数据
      const filterList = tagsViewList.value.filter((item) => item.path !== payload.path)
      tagsViewList.value = filterList
      return
    }
    // 删除非最后一项
    if (payload.type === 'notLast') {
      tagsViewList.value.splice(payload.index as number, 1)
    }
  }

  return {
    tagsViewList,
    addTagsViewList,
    removeTagsView
  }
})
