import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import {accountAxios, loginAxios} from './apis/index.js'

const app = createApp(App)

app.config.globalProperties.$loginAxios = new loginAxios()
app.config.globalProperties.$accountAxios = new accountAxios()
app.config.globalProperties.$router = router

app.use(router)
router.app = app
app.use(ElementPlus)

app.mount('#app')
