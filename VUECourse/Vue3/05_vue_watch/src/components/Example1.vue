<template>
  <div>
      <button @click="onClickHandler">{{person.name}}</button>
  </div>
</template>

<script>
import { ref , watch } from "vue";

export default {
    setup(){
        const person = ref({ name : "张三" });
        watch(person.value,(current) => {
            console.log(current);
        })

        function onClickHandler(){
            person.value.name = "里斯";
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