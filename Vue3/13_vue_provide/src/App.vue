<template>
  <ChildComA />
</template>

<script>
import { ref , provide } from "vue";
import ChildComA from './components/ChildComA.vue'

export default{
  components:{
    ChildComA
  },
  setup(){
    const person = ref({ name: "张三" });
    const changePerson = () => {
      person.value.name = "里斯";
    }
    provide("person",person);
    provide("changePerson",changePerson);
  }
}
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
