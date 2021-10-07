<template>
  <div>
    <h1>{{$store.state.count}}</h1>
    <button @click="increment(10)">同步增加</button>
    <button @click="asyncIncrement(50)">异步增加</button>
    <div><nuxt-link to="/about">跳转到About Page</nuxt-link></div>
    <Topics />
  </div>
</template>

<script>
import { mapState , mapMutations , mapActions } from 'vuex';

export default {
  // methods:{
  //   //同步增加count
  //   increment(step){
  //     this.$store.commit('increment',step);
  //   },

  //   //异步增加count
  //   asyncIncrement(step){
  //     this.$store.dispatch('asyncIncrement',step);
  //   }
  // }

  computed: mapState(['count']),
  methods:{
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement'])
  }
}
</script>
