import axios from 'axios'
import Info from './base'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://'+Info.ip+':'+Info.port, // api的base_url
  timeout: 20000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response) // 返回接口返回的错误信息
  });

export default service