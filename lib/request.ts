import axios from 'axios';
import { toast } from 'sonner';

const request = axios.create({
    baseURL: 'http://localhost:6660/api/v1',
    timeout: 10000,
});

request.interceptors.request.use(config => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('token');
        console.log("token", token);
        if (token) {
          config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        }
      }
    return config;
});

request.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            // 服务器返回了错误状态码
            toast.error(error.response.data.message);
        } else if (error.request) {
            // 请求发出但没有收到响应
            toast.error(error.message);
        } else {
            // 请求配置出错
            toast.error(error.message);
        }
        return Promise.reject(error);
    }
);

export default request;
