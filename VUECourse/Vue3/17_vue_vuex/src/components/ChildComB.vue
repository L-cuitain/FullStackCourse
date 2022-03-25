<template>
  <div>
    {{ $store.state["a"].name }}
    {{ $store.state["b"].name }}
    <button @click="$store.commit('updateName')">updateName</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>