<template>
  <div>
    <el-form :inline="true" :model="selectData" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="selectData.userName" />
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="selectData.roleName" />
      </el-form-item>
      <el-form-item >
        <el-button @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table border :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="userName" label="姓名" width="180" />
      <el-table-column label="角色" >
        <template #default="scope">
        <el-button type="text" v-for="item in scope.row.roles" :key="item.role">
          {{ item.roleName }}
        </el-button>
      </template>
      </el-table-column>
      <el-table-column label="操作" >
        <template #default="scope">
        <el-button type="text" @click="edit(scope.row,scope.$index)">
          编辑
        </el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import {initData, ListInt} from '@/types/user'
import {getUserList,getRoleList} from '@/http/api'

export default defineComponent({
  name: "UserView",
  components: {},
  setup() {
    const user = reactive(new initData())

    onMounted(()=>{
      // getList({page:order.selectData.page}).then(res=>{
      //   console.log(res);
      // })
      user.originList = [
        {
          id: 1,
          nickName: '标题',
          userName: '详情',
          roles: [
            {
              role: 0,
              roleName: '管理员',
            }
          ]
        }
      ]
      user.list = [
        {
          id: 1,
          nickName: '标题',
          userName: '详情',
          roles: [
            {
              role: 0,
              roleName: '管理员',
            }
          ]
        }
      ]
    })

    const currentChange = (page: number)=>{
      // user.selectData.page = page
    }
    const onSearch = ()=>{
      let arr:ListInt[]=[]
      if(user.selectData.userName || user.selectData.roleName){
        if(user.selectData.userName){
          arr = user.originList.filter(item=>item.userName.includes(user.selectData.userName))
        }
        if(user.selectData.roleName){
          arr = (user.selectData.userName?arr:user.originList).filter(item=>item.roles.find((v:any) => v.roleName.includes(user.selectData.roleName)))
        }
      }else{
        arr = user.originList
      }
      user.list = arr
    }
    const edit = (row:ListInt,i:number)=>{
      
    }
    return {
      ...toRefs(user),
      currentChange,
      onSearch,
      edit,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>