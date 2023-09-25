import { ElMessage, ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'
const utils = {
  // 存储数据
  saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 获取数据
  getData(key: string) {
    const data = localStorage.getItem(key)
    if (data) return JSON.parse(data)
    if (!data) return null
  },
  // 删除数据
  removeData(key: string) {
    localStorage.removeItem(key)
  },
  loadingInstance: null as LoadingInstance | null,
  // 开启全局loading
  openLoading(msg?: string) {
    if (!this.loadingInstance) {
      this.loadingInstance = ElLoading.service({
        body: true,
        fullscreen: true,
        background: 'rgba(0,0,0,0.7)',
        text: msg ? msg : '正在处理中...'
      })
    }
  },
  // 关闭全局loading
  closeLoading() {
    // loading开启 才能关闭loading加载
    if (this.loadingInstance) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  },
  // 成功信息提示
  showSuccess(message: string) {
    return ElMessage({
      message: message,
      grouping: true,
      type: 'success'
    })
  },
  // 错误信息提示
  showError(message: string) {
    return ElMessage({
      message: message,
      grouping: true,
      customClass: 'message-info',
      type: 'error'
    })
  },
  // 警告信息提示
  showWarning(message: string) {
    return ElMessage({
      message: message,
      grouping: true,
      type: 'warning'
    })
  },
  // 展示消息提示
  showInfo(message: string) {
    return ElMessage({
      message: message,
      grouping: true,
      type: 'info'
    })
  },
  // 关闭所有消息提示
  closeMsg() {
    ElMessage.closeAll()
  }
}
export default utils
