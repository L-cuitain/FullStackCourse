<template>
  <div>
    <h1>parent页面(二级路由)</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">Chind1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">Chind2</nuxt-link></li>
      </ul>
    </nav>
    <NuxtChild />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>