<template>
  <div>
      {{ person.name }}
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { reactive , watch } from 'vue';

export default {
    setup(){
        const person = reactive({ name : "张三" });
        const onClickHandler = () => {
            person.name = "里斯";
        }
        watch(person , (current , previous) => {
            console.log(current);
        })
        return {
            person,
            onClickHandler
        }
    }
}
</script>

<style>

</style>