<template>
  <div>
    {{name}}
    {{age}}
    {{brand.title}}
    {{brand.year}}
  </div>
</template>

<script>
import { reactive , ref } from 'vue'

export default{
  setup(){
    const person = reactive({
      name: "张三",
      age: 20,
      brand: { title: "宝马" , year: 1 }
    });
    return{
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>
