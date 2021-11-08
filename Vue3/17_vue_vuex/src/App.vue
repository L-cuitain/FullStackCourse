<template>
  <!-- <div>
    {{$store.state.username}}
    {{$store.getters.newUsername}}

    <button @click="$store.commit('updateUsername','里斯')">change username</button>
    <ChildComA />    
  </div> -->

  <div>
    <!-- {{$store.state['a'].name}}
    {{$store.state['b'].name}} -->
    <ChildComD />
    <!-- {{$store.getters.newName}} -->
  </div>
</template>

<script>
// import { useStore } from 'vuex';
// import ChildComA from './components/ChildComA.vue';
// import ChildComB from './components/ChildComB.vue';
// import ChildComC from './components/ChildComC.vue';
import ChildComD from './components/ChildComD.vue';



export default{
  components:{
    ChildComD
  },
  // setup(){
  //   const store = useStore();
  //   console.log(store.state.username);
  //   console.log(store.getters.newUsername);
  // }

  // setup(){
  //   const store = useStore();
  //   console.log(store.state.a.name);
  //   console.log(store.state.b.name);
  // }
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
