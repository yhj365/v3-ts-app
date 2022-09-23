<template>
  <div>
    <div>
      <el-button @click="addBtn">新增角色</el-button>
    </div>
    <el-table border :data="roleList" style="width: 100%">
      <el-table-column prop="role" label="ID" width="180" />
      <el-table-column prop="roleName" label="角色" >
      </el-table-column>
      <el-table-column label="修改权限" >
        <template #default="scope">
        <el-button type="text" @click="editAuthBtn(scope.row)">
          编辑
        </el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="isShow" title="Shipping address">
    <el-form :model="active">
      <el-form-item label="角色名称" >
        <el-input v-model="active.roleName"  />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="addSubmit"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import {initData} from '@/types/role'
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserView",
  components: {},
  setup() {
    const router = useRouter()
    const data = reactive(new initData())

    onMounted(()=>{
      data.roleList =[{
          role: 0,
          roleName: '管理员',
          authrity: [1,2,3,4,5,6]
        },
        {
          role: 1,
          roleName: '用户',
          authrity: [1,2,3]
        }
      ]
    })

    const editAuthBtn = (row:any)=>{
      console.log(row);
      router.push({path: '/AuthorityView',query:{id:row.role,authrity:row.authrity.join()}})
    }
    const addBtn = ()=>{
      data.isShow = true
    }
    const addSubmit = ()=>{
      data.roleList.push({
        role: data.roleList.length,
        roleName: data.active.roleName,
        authrity: []
      })
      data.isShow = false
    }
    return {
      ...toRefs(data),
      addBtn,
      addSubmit,
      editAuthBtn,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>