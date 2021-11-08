<template>
  <div>
      <SonComB v-model="firstName"/>
      <button @click="onClickHandler">我是ChildComD组件中的button</button>
  </div>
</template>

<script>
import SonComB from "./SonCom/SonComB.vue";
import { ref } from "vue";

export default {
  components: { SonComB },
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