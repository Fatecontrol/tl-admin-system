import './styles/default.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入全局注册
import { globalRegister } from './global/index'

// 引入mockjs
// import './mock'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(globalRegister)

app.mount('#app')
