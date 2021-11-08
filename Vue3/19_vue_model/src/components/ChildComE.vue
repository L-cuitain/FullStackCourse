<template>
  <div>
    <SonComC v-model:firstName="firstName" v-model:lastName="lastName" />
      <button @click="onClickHandler">我是ChildComE组件中的button</button>
  </div>
</template>

<script>
import SonComC from "./SonCom/SonComC.vue";
import { ref } from "vue";

export default {
  components: { SonComC },
  setup() {
    const firstName = ref("张三");
    const lastName = ref("里斯");
    const onClickHandler = () => {
      firstName.value = "孙悟空";
      lastName.value = "猪八戒";
    };
    return {
      firstName,
      lastName,
      onClickHandler,
    };
  },
};
</script>

<style>
</style>