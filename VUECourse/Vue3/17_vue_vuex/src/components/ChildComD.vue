<template>
  <div>
      {{$store.getters['a/newName']}}
      {{$store.getters['b/newName']}}
      <button @click="$store.commit('a/updateName')">update moduleA</button>
      <button @click="$store.commit('b/updateName')">update moduleB</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>