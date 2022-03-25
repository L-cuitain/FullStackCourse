<template>
  <div>
      <h1>My Page</h1>
      <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>

<style>

</style>