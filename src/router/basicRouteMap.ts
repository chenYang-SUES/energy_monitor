import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/layouts/DefaultLayout.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/:pathMatch(.*)*",  // 兜底路由，捕获404 Not found 路由
        name: "NotFound",
        component: () => import("@/views/NotFound.vue")
    },
]

export default routes