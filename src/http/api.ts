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