<template>
  <el-header>
    <el-row style="display: flex;align-items:center;">
      <el-col :span="6">
        <img class="logo" src="@/assets/logo.png" />
      </el-col>
      <el-col :span="12">
        <h2>后台管理系统</h2>
      </el-col>
      <el-col :span="6">
        <el-button type="text">管理员</el-button>
      </el-col>
    </el-row>
  </el-header>
  <el-container style="display: flex">
    <el-aside width="200px">
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      >
        <el-menu-item v-for="item in list" :key="item.path" :index="item.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    console.log("Home")
    const router = useRouter()
    const list = router.getRoutes().filter(item=>item.meta.isShow)
    console.log(list);
    
    return {
      list
    }
  },
  
})
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  background: #545c64;
  .logo {
    height: 60px;
  }
  h2{
    color: #fff;
  }
}
.el-aside{
  .el-menu{
    height: calc(100vh - 60px);
  }
}
</style>