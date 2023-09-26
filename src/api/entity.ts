import request from '@/utils/request'

export type EntityConfigType = {
  type: string
}
// 获取实体配置数据
export const getEntityConfig = (data: EntityConfigType) => {
  return request({ url: '/api/entity', method: 'POST', data })
}
// 获取表格数据
export const getTableList = () => {
  return request({ url: '/api/table/list', method: 'GET' })
}
