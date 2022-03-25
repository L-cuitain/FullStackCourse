<template>
  <div>
      <p>{{person}}</p>
      <p>{{brandName}}</p>
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref , toRef } from "vue";

export default {
    setup(){
        const person = ref({ brand: {name:"宝马"} });
        const onClickHandler = () => {
            person.value.brand.name = "奔驰";
        };
        return{
            person,
            brandName: toRef(person.value.brand , "name"),
            onClickHandler
        }
    }
}
</script>

<style>

</style>