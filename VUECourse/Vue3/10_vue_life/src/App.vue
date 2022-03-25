<template>
  <div>
    <button @click="show = !show">toggle</button>
    <!-- <ChildComA v-if="show"/> -->
    <ChildComB v-if="show"/>
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ChildComA from "./components/ChildComA.vue";
import ChildComB from './components/ChildComB.vue'

import { ref } from "vue";

export default {
  components: {
    ChildComB,
  },
  setup() {
    console.log("setup");

    const show = ref(true);
    return{
      show
    }
  },
  beforeCreate() {
    console.log("before create");
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
