<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id"><a href="#">{{ item.title }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  // @nuxt/http
  // async asyncData({ $http }){
  // let {data } = await $http.$get('/topics?page=2')  
  //   let { data } = await $http.$get('/topics');
  //   return{
  //     list: data
  //   }
  // }

  //@nuxtjs/axios
  async asyncData({ $axios }){
    // let {data } = await $axios.$get('/topics?page=2')
    let { data } = await $axios.$get('/topics');
    return{
      list: data
    }
  }
}
</script>
