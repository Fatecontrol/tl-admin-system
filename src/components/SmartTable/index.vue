<template>
  <div class="table-page">
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="(item, index) in tableColumn" :key="index">
        <el-table-column v-if="item.prop" v-bind="item"></el-table-column>
        <el-table-column v-if="!item.prop" v-bind="item">
          <slot name="handle">
            <el-button link type="primary" size="small">编辑</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </slot>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tableData: any
  tableColumn: any
}>()
</script>

<style lang="scss" scoped></style>
