<template>
  <div class="table__page">
    <el-card class="box-card">
      <IndexTable :table-data="tableData" :table-column="tableColumn">
        <template #handle>
          <el-button>审核</el-button>
          <el-button>通过</el-button>
        </template>
      </IndexTable>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getTableList } from '../../../api/entity'
import IndexTable from '../../../components/SmartTable/index.vue'
import { ref } from 'vue'
const tableColumn = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址',
    width: '180'
  },
  {
    prop: 'remark',
    label: '备注',
    width: '180'
  },
  {
    label: '操作',
    width: '260'
  }
])
const tableData = ref<any>([])
const initTableList = async () => {
  const res = await getTableList()
  console.log('res', res)
  tableData.value = res.data
}
initTableList()
</script>

<style lang="scss" scoped></style>
