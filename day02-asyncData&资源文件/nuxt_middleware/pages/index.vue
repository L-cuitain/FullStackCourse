<template>
  <div>
    <div>home page</div>
    <nuxt-link to="/about">切换关于页面</nuxt-link>
  </div>
</template>

<script>
export default {
  // 单个文件执行中间件 auth3
  middleware: 'auth3'
}
</script>
