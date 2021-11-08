<template>
  <div>
    <div>I am parent component</div>
    <hr />
    <ChildComB :msg="msg" @onMsgChanged="onMsgChanged"/>
  </div>
</template>

<script>
// import ChildComA from "./components/ChildComA.vue";
import ChildComB from "./components/ChildComB.vue";

import { ref } from "vue";

export default {
  components: {
    ChildComB,
  },
  setup() {
    const msg = ref("i am a message");
    const onMsgChanged = (data) => {
      msg.value = data;
    }
    return{
      msg,
      onMsgChanged
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
