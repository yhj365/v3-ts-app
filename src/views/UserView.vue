<template>
  <div>
    <el-form :inline="true" :model="selectData" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="selectData.userName" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="selectData.roleName"  placeholder="请选择角色">
          <el-option :label="role.roleName" :value="role.role" v-for="role in roleList" :key="role.role"/>
        </el-select>
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
        <el-button type="text" @click="editBtn(scope.row,scope.$index)">
          编辑
        </el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="isShow" title="Shipping address">
    <el-form :model="active">
      <el-form-item label="姓名" >
        <el-input v-model="active.userName"  />
      </el-form-item>
      <el-form-item label="角色" >
        <el-select v-model="active.roles" multiple placeholder="请选择角色">
          <el-option :label="role.roleName" :value="role.role" v-for="role in roleList" :key="role.role"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="userChange"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import {initData, ListInt, roleInt} from '@/types/user'
import {getUserList,getRoleList} from '@/http/api'

export default defineComponent({
  name: "UserView",
  components: {},
  setup() {
    const data = reactive(new initData())

    onMounted(()=>{
      // getList({page:order.selectData.page}).then(res=>{
      //   console.log(res);
      // })
      data.originList = [
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
      data.list = [
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
      data.roleList =[{
          role: 0,
          roleName: '管理员',
        },
        {
          role: 1,
          roleName: '用户',
        }
      ]
    })

    const currentChange = (page: number)=>{
      // data.selectData.page = page
    }
    const onSearch = ()=>{
      let arr:ListInt[]=[]
      if(data.selectData.userName || data.selectData.roleName){
        if(data.selectData.userName){
          arr = data.originList.filter(item=>item.userName.includes(data.selectData.userName))
        }
        if(data.selectData.roleName){
          arr = (data.selectData.userName?arr:data.originList).filter(item=>item.roles.find((v:roleInt) => v.roleName.includes(data.selectData.roleName)))
        }
      }else{
        arr = data.originList
      }
      data.list = arr
    }
    let activeIndex = 0
    const editBtn = (row:ListInt,i:number)=>{
      data.active = {...row,roles:row.roles.map(item=> item.role)}
      activeIndex = i
      data.isShow = true
    }
    const userChange = ()=>{
      data.list[activeIndex] = {
        ...data.active,
        roles: data.roleList.filter(item=> data.active.roles.includes(item.role))
      }

      data.isShow = false
    }
    return {
      ...toRefs(data),
      currentChange,
      onSearch,
      editBtn,
      userChange,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>