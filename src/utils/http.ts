import service from "./axios";
interface ResponseData {
    code: number,
    message: string,
    data: any
}

const get = (url: string, params?: any): Promise<ResponseData> => service.get(url, { params })

const post = (url: string, data?: any): Promise<ResponseData> => service.post(url, data)

export { get, post }