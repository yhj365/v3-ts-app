import $http from 'axios'

interface loginIntf {
  username: string,
  password: string
}
export const login = (data: loginIntf)=>{
  return $http({
    url: '/api/login',
    method: 'POST',
    data
  })
}
export const getList = (data: any)=>{
  return $http({
    url: '/api/getList',
    method: 'POST',
    data
  })
}