<template>
  <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
  </div>
</template>

<script>
import {ref , watch} from "vue";

export default {
    setup(){
        const firstName = ref("");
        const lastName = ref("");
        watch([firstName , lastName] , current => {
            console.log(current);
        })
        return {
            firstName,
            lastName
        }
    }
}
</script>

<style>

</style>