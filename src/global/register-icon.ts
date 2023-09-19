// 引入element-plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

export default function (app: App) {
  // 全局注册icon图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
