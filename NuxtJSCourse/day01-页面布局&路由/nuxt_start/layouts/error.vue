<template>
  <div>
      <h1 v-if="error.statusCode === 404">页面不存在</h1>
      <h1 v-else>应用发生错误异常</h1>
      <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
    props:['error']
}
</script>

<style>

</style>