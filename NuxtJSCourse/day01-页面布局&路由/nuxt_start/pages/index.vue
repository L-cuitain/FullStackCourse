<template>
  <div>
    <h3>Home Page</h3>

    <Goods />

    <!-- 自定义错误页面 -->
    <nuxt-link to="/user/12312">跳转错误页面</nuxt-link>
  </div>
</template>

<script>
export default {
  //指定自定义布局
  layout: 'blog'
}
</script>
