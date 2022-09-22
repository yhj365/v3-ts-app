
export interface ListInt {
  id: number,
  nickName: string,
  userName: string,
  roles:role[]
}
export interface role {
  role: number,
  roleName: string,

}

export interface selectDataInt {
  userName: string,
  roleName: string,

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

}