
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

export class initData {
  role:role = {
    role: 0,
    roleName: ''
  }
  List:ListInt = {
    nickName: '',
    userName: '',
    id: 0,
    roles: [],
  }

}