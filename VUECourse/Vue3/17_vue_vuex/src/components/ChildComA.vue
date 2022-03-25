<template>
  <div>
    <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore();

    const onClickHandler = () => {
      store.dispatch('updateName');
    }
    return{
      onClickHandler
    }
  }
}
</script>

<style>

</style>