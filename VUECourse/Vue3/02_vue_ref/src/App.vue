<template>
  <div>
    <HelloWorld />
    <Demo />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Demo,
  },
};
</script>
