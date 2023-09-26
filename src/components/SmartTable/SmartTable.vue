<template>
  <div class="search-box flex">
    <!-- 左侧按钮 -->
    <div class="btns flex-item">
      <el-button type="primary" icon="Plus">添加数据</el-button>
      <slot name="btns"> </slot>
    </div>
    <!-- 右侧搜索框 -->
    <div class="search-form-box flex">
      <div class="search-form-label">快捷搜索：</div>
      <div class="search-form-type-box">
        <el-select v-model="searchForm.type" placeholder="请选择筛选类型" @change="searchChange">
          <template v-for="(item, index) in entityTypes" :key="index">
            <el-option v-if="item.defaultSearch" :value="item.prop" :label="item.label">
            </el-option>
          </template>
        </el-select>
      </div>
      <div class="search-form-value-box">
        <template v-for="(item, index) in entityTypes" :key="index">
          <template v-if="item.type === '1'"> 数字</template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getEntityConfig } from '../../api/entity'
// 接收父组件的数据
const option = defineProps<{
  entityType: string
}>()

export type SearchFormType = {
  type: string
}
// 搜索框表单的数据
const searchForm = ref<SearchFormType>({
  type: ''
})
// 下拉选择框选择出发的方法
const searchChange = (options) => {
  console.log('options', options)
  entityTypes.value = entityTypes.value.filter((item) => item.prop === options)
  console.log('entityTypes==', entityTypes)
}
// 实体配置数据
const entityTypes = ref([])
// 请求实体配置数据
const loadEntityConfig = async () => {
  const data = { type: option.entityType }
  const entityRes = await getEntityConfig(data)
  entityTypes.value = entityRes.data
}
loadEntityConfig()
</script>

<style lang="scss" scoped></style>
