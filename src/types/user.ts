
export interface ListInt {
  id: number,
  nickName: string,
  userName: string,
  roles:roleInt[]
}
export interface roleInt {
  role: number,
  roleName: string,
}

export interface selectDataInt {
  userName: string,
  roleName: string,

}
export interface ActiveInt {
  id: number,
  nickName: string,
  userName: string,
  roles:number[]
}

export class initData {
  selectData:selectDataInt = {
    userName: '',
    roleName: ''
  }
  originList:ListInt[] =[{
    nickName: '',
    userName: '',
    id: 0,
    roles: [],
  }]
  list:ListInt[] =[{
    nickName: '',
    userName: '',
    id: 0,
    roles: [],
  }]
  roleList: roleInt[]=[{
    role: 0,
    roleName: '',
  }]
  active: ActiveInt = {
    nickName: '',
    userName: '',
    id: 0,
    roles: [],
  }
  isShow = false
}