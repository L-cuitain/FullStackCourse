<template>
  <div>
      {{person.name}}
      {{person.age}}

      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const person = ref({ name: "张三" , age: 25 })
        const onClickHandler = () => {
            person.value.name = "王五";
            person.value.age = 60;
            //重新为 person 赋值
            // person.value = { name: "里斯" , age: 20 }
        }

        return{
            person,
            onClickHandler
        }
    }
}
</script>

<style>

</style>