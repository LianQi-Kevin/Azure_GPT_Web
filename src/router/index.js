import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../View/Home.vue";
import Login from "../View/Login.vue";

// 定义路由
const routes = [
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/', component: Home }
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router