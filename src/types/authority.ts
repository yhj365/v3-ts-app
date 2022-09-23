import { ElTree } from 'element-plus'
import { ref } from 'vue'

export interface queryInt{
  id: number,
  authority: string
}
export interface listInt{
  roleId: number,
  name: string,
  viewRole?: string,
  roleList?: listInt[]
}

export  class initData {
  id=0
  authorityIds: number[] =[]
  list: listInt[]=[]
  treeRef = ref<InstanceType<typeof ElTree>>()

  constructor(id:number,authority: string){
    this.id = id
    this.authorityIds = authority.split(',').map(v=>+v)
  }
}