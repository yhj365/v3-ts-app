<template>
  <div class="login-box">
    <div class="login-title">登录页面</div>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="login-Form"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="submit-btn" type="primary" @click="submitForm(loginFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive, toRefs } from 'vue'
import type { FormInstance } from 'element-plus'
import {initData} from '@/types/login'
import {login} from '@/http/api'
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {

    const data = reactive(new initData())
    const rules = {
      username: [{ required: true, trigger: 'blur',message: '账号不能为空' }],
      password: [{ required: true, trigger: 'blur',message: '密码不能为空' }],
    }
    const router = useRouter()
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate(async (valid) => {
        if (valid) {
          // localStorage.setItem('token','123456')
          // router.push('/')
          login(data.loginForm).then(res=>{
            localStorage.setItem('token',res.data.token)
            router.push('/')
            console.log('submit!')
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
    return {
      ...toRefs(data),
      rules,
      submitForm,
    }
  },
})
</script>

<style lang="scss" scoped>
.login-box {
  background: #fff;
  width: 100%;
  height: 100%;
  .login-title{
    margin: 30vh auto 0;
    width: 200px;
    text-align: center;
  }
  .login-Form{
    width: 400px;
    margin: 20px auto;
    padding: 20px;
    .submit-btn{
      width: 100%;
    }
  }
}
</style>
