<template>
  <div>
    <p>{{name}}</p>
    <p>{{person}}</p>
    <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref , toRef } from "vue";

export default{
  setup(){
    const person = ref({ name: "张三" });
    const onClickHandler = () => {
      person.value.name = "里斯";
    }
    return{
      name: toRef(person.value,"name"),
      person,
      onClickHandler
    }
  }
}
</script>



<style scoped>

</style>
