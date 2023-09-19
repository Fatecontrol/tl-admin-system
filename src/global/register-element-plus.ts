// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入element-plus主题
import 'element-plus/theme-chalk/dark/css-vars.css'

// 引入element-plus中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

import type { App } from 'vue'

export default function (app: App) {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
