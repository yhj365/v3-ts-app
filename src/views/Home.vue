<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted(){
    const obj = {
      name: 'Hello World',
    }
    const proxyObj = new Proxy(obj, { 
      get(target:any,key:any):any { 
        return target[key];
      },
      set(target,key,newValue) {
        target[key] = newValue
        return true
      }
    })
  }
});
</script>
