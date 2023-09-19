// 引入图标全局注册
import registerIcon from './register-icon'
// 引入element-plus全局注册
import registerElementPlus from './register-element-plus'

// 引入app类型
import type { App } from 'vue'
export const globalRegister = {
  install(app: App) {
    app.use(registerIcon)
    app.use(registerElementPlus)
  }
}
