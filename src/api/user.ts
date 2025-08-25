import { post } from "@/utils/http";

const Api = {
    Login: "/login"
}

interface LoginParams {
    username: string,
    password: string
}

const loginApi = (data: LoginParams): Promise<any> => post(Api.Login)

export { loginApi }