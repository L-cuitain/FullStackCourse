<template>
  <div>
      {{person.name}}
      <button @click="changePerson">button</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
    setup(){
        const person = inject("person");
        const changePerson = inject("changePerson");
        return{
            person,
            changePerson
        }
    }
}
</script>

<style>

</style>