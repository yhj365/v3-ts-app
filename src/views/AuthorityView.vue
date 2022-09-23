<template>
  <div>
    <el-button @click="submit">确认修改</el-button>
    <el-tree
      ref="treeRef"
      :data="list"
      show-checkbox
      check-strictly
      node-key="roleId"
      :default-checked-keys="authorityIds"
      :props="{
        children: 'roleList',
        label: 'name',
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from "vue-router";
import {initData} from '@/types/authority'

export default defineComponent({
  setup() {
    const route = useRoute()
    const query:any = route.query
    const data = reactive(new initData(query.id, query.authrity))

    onMounted(()=>{
      data.list = [
        {
          roleId: 0,
          name: '订单列表',
          viewRole: '',
          roleList: [
            {
              roleId: 1,
              name: '订单列表查询',
            }
          ]
        },
        {
          roleId: 2,
          name: '用户列表',
          viewRole: '',
          roleList: [
            {
              roleId: 3,
              name: '用户列表查询',
            },
            {
              roleId: 4,
              name: '用户编辑',
            },
          ]
        }
      ]
    })

    const submit =  ()=>{
      console.log(data.treeRef?.getCheckedKeys());
      
    }
    return {
      ...toRefs(data),
      submit,
    }
  },
})
</script>
