import { ref } from 'vue'
import type { FormInstance } from 'element-plus'

export interface loginFormInt {
  account: string,
  password: string,
}
export class initData {
  loginForm:loginFormInt = {
    account: '',
    password: '',
  }
  loginFormRef = ref<FormInstance>()
}
