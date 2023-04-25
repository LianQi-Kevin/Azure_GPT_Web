import {createRouter, createWebHashHistory} from "vue-router";

// 定义路由
const routes = [
    { path: '/', alias: '/login', name: 'login', component: () => import('../View/Login.vue') },
    { path: '/home', name: 'home', component: () => import('../View/Home.vue') },
    { path: '/chat', name: 'GPT' , component: () => import('../View/Chat.vue')}
];

// 创建路由实例并传递 `routes` 配置
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
