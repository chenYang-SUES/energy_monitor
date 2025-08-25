import { loginApi, type LoginParams } from "@/api/user";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: sessionStorage.getItem("token") || null,
        roles: sessionStorage.getItem("roles") ? JSON.parse(sessionStorage.getItem("roles")!) : [],  // ! ts的非空断言
        username: sessionStorage.getItem("username") || "",
        menu: sessionStorage.getItem("menu") ? JSON.parse(sessionStorage.getItem("menu")!) : [],
    }),
    actions: {
        async login(data: LoginParams) {
            try {
                const { data: { token, user: { username, roles }, menulist } } = await loginApi(data)
                this.token = token
                this.roles = roles
                this.username = username
                this.menu = menulist
                sessionStorage.setItem("token", token)
                sessionStorage.setItem("roles", JSON.stringify(roles))  // 本地存储只能存基本类型
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("menu", JSON.stringify(menulist))
            } catch (error) {
                console.log(error)
            }
        }
    }

})