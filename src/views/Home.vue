<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header style="height:80px;">
        <div>
          <img src="@/assets/logo.png"/>
          <h2>后台管理系统</h2>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
  mounted(){
    console.log('Home');
    
  }
});
</script>
