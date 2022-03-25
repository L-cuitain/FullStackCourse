<template>
  <div>
      <input type="text" v-model="firstName" @update:modelValue="onFirstNameChanged($event)">
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(){
        const firstName = ref("张三");
        const onFirstNameChanged = (event) => {
            console.log(event);
        };
        return{
            firstName,
            onFirstNameChanged
        }
    }
}
</script>

<style>

</style>