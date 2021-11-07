<template>
  <div>
      {{name}}
      {{age}}
      {{year}}
  </div>
</template>

<script>
import { reactive , toRefs } from "vue";

export default {
    name: "APP",
    setup(){
        const person = reactive({
            name: "张三",
            age: 20,
            brand: { title: "宝马" , year: 1 }
        });
        return{
            ...toRefs(person),
            ...toRefs(person.brand)
        }
    }
}
</script>

<style>

</style>