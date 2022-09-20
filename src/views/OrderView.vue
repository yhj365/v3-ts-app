<template>
  <div>
    <el-form :inline="true" :model="selectData" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="selectData.title" />
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="selectData.body" />
      </el-form-item>
      <el-form-item >
        <el-button @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table border :data="orderList" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="body" label="详情" />
    </el-table>
    <el-pagination @current-change="currentChange" layout="prev, pager, next" :total="selectData.count" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import {initData} from '@/types/order'
import {getList} from '@/http/api'

export default defineComponent({
  name: "OrderView",
  components: {},
  setup() {
    console.log("OrderView")
    const order = reactive(new initData())

    onMounted(()=>{
      // getList({page:order.selectData.page}).then(res=>{
      //   console.log(res);
      // })
      order.orderList = [
        {
          userId: 1,
          id: 1,
          title: '标题',
          body: '详情',
        }
      ]
    })

    const currentChange = (page: number)=>{
      order.selectData.page = page
    }
    const onSearch = ()=>{
      console.log(order.selectData);
      
    }
    return {
      ...toRefs(order),
      currentChange,
      onSearch,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>