<template>
  <ul>
    <li v-for="item in $store.state.topics" :key="item.id">
      <a href="#">{{item.title}}</a>
    </li>
  </ul>
</template>

<script>
//引入axios
import axios from "axios";

export default {
  data() {
    return {
      msg: "hello",
    };
  },

  async fetch() {
    const {
      data: { data: topics },
    } = await axios.get("https://cnodejs.org/api/v1/topics");
    this.$store.commit("setTopics", topics);
  },
};
</script>

<style>
</style>