<template>
  <div>
    <SonComA
      :firstName="firstName"
      @onFirstNameChanged="onFirstNameChanged($event)"
    />
    <button @click="onClickHandler">我是ChildComC组件中的button</button>
  </div>
</template>

<script>
import { ref } from "vue";
import SonComA from "./SonCom/SonComA.vue";

export default {
  name: "App",
  components: {
    SonComA,
  },
  setup() {
    const firstName = ref("张三");
    const onClickHandler = () => {
      firstName.value = "里斯";
    };
    const onFirstNameChanged = (event) => {
      firstName.value = event;
    };
    return {
      firstName,
      onClickHandler,
      onFirstNameChanged,
    };
  },
};
</script>

<style>
</style>