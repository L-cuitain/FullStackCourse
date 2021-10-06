<template>
  <div class="list">
      <ul>
          <li v-for="item in topics" :key="item.id"><a href="#">{{item.title}}</a> </li>
      </ul>
  </div>
</template>

<script>
export default {
    async asyncData({app}){
        const { data: { data: topics } } = await app.$api.getTopics("/topics");
        console.log(topics);
        return {
            topics
        }
    }
}
</script>

<style>

</style>