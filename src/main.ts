import './styles/default.scss'

import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import router from './router'

// 引入全局注册
import { globalRegister } from './global/index'

// 引入mockjs
import './mock'

// 引入权限文件
import './permission'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.use(globalRegister)

app.mount('#app')
