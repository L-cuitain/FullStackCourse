<template>
  <div>
    <input type="text" v-model="firstName" />
    <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const firstName = ref("张三");
    const onClickHandler = () => {
      firstName.value = "里斯";
    };
    return {
      firstName,
      onClickHandler,
    };
  },
};
</script>

<style>
</style>