<template>
  <div>
    {{ name }}
    {{ age }}
    <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
//引入ref
import { ref } from "vue";

export default {
  setup() {
    const name = ref("张三");
    const age = ref(29);

    const onClickHandler = () => {
        name.value = "里斯";
        age.value = 30;
    }

    return {
      name,
      age,
      onClickHandler
    };
  },
};
</script>

<style>
</style>