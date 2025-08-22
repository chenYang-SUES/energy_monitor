import { createRouter, createWebHistory } from "vue-router";
// 类型导入必须显式声明为类型
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue")
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router