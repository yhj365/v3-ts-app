import axios from "axios"
import {ElMessage} from 'element-plus'

enum MSGS {
  '操作成功' = 200,
  '密码错误',
  '账号错误',
  '系统错误'
}

const $http = axios.create({
  baseURL: "http://localhost:8010/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})

$http.interceptors.request.use(config=>{
  console.log(config);
  
  config.headers = config.headers || {}
  if(localStorage.getItem('token')){
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
})


$http.interceptors.response.use(res=>{
  console.log(res);
  const code: Number = res.data.code
  if(code !== 200){
    // ElMessage.error(MSGS[code])
    return Promise.reject(res.data.msg)
  }
  return res.data
},err=>{
  console.log(err);
  
})

export default $http