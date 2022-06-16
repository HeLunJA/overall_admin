import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/css/transition.scss'
import 'virtual:svg-icons-register'
import App from './App.vue'
import svgIcon from '@/components/SvgIcon/index.vue'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('svg-icon', svgIcon)
for (const name in ElIcons) {
  app.component(name, ElIcons[name as keyof typeof ElIcons])
}
app.mount('#app')