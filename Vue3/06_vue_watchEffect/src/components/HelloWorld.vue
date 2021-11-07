<template>
  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    watchEffect(() => {
      console.log(firstName.value);
      console.log(lastName.value);
    });
    return{
      firstName,
      lastName
    }
  },
};
</script>



<style scoped>
a {
  color: #42b983;
}
</style>
