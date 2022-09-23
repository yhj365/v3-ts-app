
export interface roleInt {
  role: number,
  roleName: string,
  authrity: number[]
}

export class initData {
  roleList: roleInt[] = []
  active: roleInt = {
    role: 0,
    roleName: '',
    authrity: []
  }
  isShow = false
}