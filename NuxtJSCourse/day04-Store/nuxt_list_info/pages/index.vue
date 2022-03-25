<template>
  <div>
    <ul>
      <li v-for="item in $store.state.topics" :key="item.id"><nuxt-link :to="`/info/${item.id}`">{{item.title}}</nuxt-link></li>
    </ul>  
  </div>
</template>

<script>
export default {
  //使用fetch发起请求
  async fetch({ $api , store }){
    const { data: {data:topics} } = await $api.getTopics('/topics');
    store.commit('setTopics',topics);
  } 
}
</script>
