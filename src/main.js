import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import localAxios from './localAxios/index.js'
// import moment from 'moment';

const app = createApp(App)

app.config.globalProperties.$axios = new localAxios()
app.config.globalProperties.$router = router
// app.config.globalProperties.$momet = moment
// app.config.globalProperties.$cookies = VueCookies

app.use(router)
router.app = app
app.use(ElementPlus)

app.mount('#app')
