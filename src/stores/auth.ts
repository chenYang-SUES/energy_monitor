import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
        roles: [],
        username: "",
        menu: []
    }),
    actions: {

    }

})