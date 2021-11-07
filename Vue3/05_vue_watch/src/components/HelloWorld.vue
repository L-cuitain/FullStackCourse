<template>
  <div>
    <input type="text" v-model="text">
  </div>
</template>

<script>
import { ref , watch } from 'vue'

export default{
  setup(){
    //定义响应式变量 text
    const text = ref("");
    //监听文本改变 并打印结果
    watch(text,(current,previous) => {
      console.log("current",current);
      console.log("previous",previous);
    })
    return { text }
  }
}
</script>

<style scoped>
</style>
