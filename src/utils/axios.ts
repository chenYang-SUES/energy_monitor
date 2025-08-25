import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { ElNotification } from "element-plus";
const service: AxiosInstance = axios.create({
    baseURL: "https://www.demo.com",  // 后面我们会把它替换成环境变量
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    ElNotification({
        title: "Error",
        message: error.message，
        type: "error"
    })
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    console.log(response)
    return response
}, (error: AxiosError) => {
    ElNotification({
        title: "Error",
        message: error.message，
        type: "error"
    })
    return Promise.reject(error)
})