import { ref } from 'vue'
import type { FormInstance } from 'element-plus'

export interface loginFormInt {
  username: string,
  password: string,
}
export class initData {
  loginForm:loginFormInt = {
    username: '',
    password: '',
  }
  loginFormRef = ref<FormInstance>()
}
