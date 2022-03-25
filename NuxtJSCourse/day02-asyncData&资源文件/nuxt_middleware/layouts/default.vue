<template>
  <div>
      <h1>布局文件</h1>
      <Nuxt />
  </div>
</template>

<script>
export default {
    //布局文件执行中间件 auth2
    middleware: 'auth2'
}
</script>

<style>

</style>