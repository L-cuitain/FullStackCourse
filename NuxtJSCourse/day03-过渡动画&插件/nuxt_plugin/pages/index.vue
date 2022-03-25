<template>
  <div class="home">
      <h3 v-tooltip="msg">鼠标悬浮显示提示</h3>
      <nuxt-link to="/list">跳转到 List Page</nuxt-link>
      <nuxt-link to="/nav">跳转到 Nav Page</nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'hello Nuexters'
    }
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
.home {
  width: 400px;
  margin: 100px auto;
}
</style>