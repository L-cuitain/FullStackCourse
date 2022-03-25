<template>
  <ChildComB />
</template>

<script>
// import ChildComA from './components/ChildComA.vue'
import ChildComB from './components/ChildComB.vue'


export default{
  components:{
    ChildComB
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
