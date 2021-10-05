<template>
  <div>
    <h1>About Page</h1>
    <div v-if="rendering == 'server'">
      <p>
        页面渲染在<strong>{{ rendering }}</strong>
      </p>
      <p>
        页面刷新后渲染在<strong>{{ rendering }}</strong>
      </p>
    </div>
    <p v-if="rendering == 'client'">页面跳转后渲染在{{ rendering }}</p>
    <h3>刷新页面后再看效果</h3>
    <nuxt-link to="/">跳转到index page</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      rendering: process.server ? "server" : "client",
    };
  },
};
</script>

<style>
</style>