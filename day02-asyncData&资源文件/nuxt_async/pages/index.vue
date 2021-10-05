<template>
  <div>
    <h1>{{ msg }}</h1>
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
    <nuxt-link to="/about">跳转到about page</nuxt-link>

    <nuxt-link to="/list">点击跳转list page</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      msg: "Home Page",
      //asyncData函数在页面刷新或跳转时都会触发,刷新在服务端触发,路由切换在客户端触发
      rendering: process.server ? "server" : "client",
    };
  },
};
</script>
