import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import localAxios from './localAxios/index.js'

const app = createApp(App)

app.config.globalProperties.$axios = new localAxios()
app.config.globalProperties.$router = router

app.use(ElementPlus)
app.use(router)
app.mount('#app')
