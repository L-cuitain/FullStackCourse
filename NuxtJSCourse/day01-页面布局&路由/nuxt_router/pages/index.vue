<template>
  <div>
    <h1>Index Page</h1>

    <nuxt-link to="/goods?id=100&sort=apple">goods</nuxt-link>
    <br />
    <nuxt-link to="/user/100">/user/100</nuxt-link>
    <br />
    <nuxt-link to="/user/300/400">/user/300/400</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
