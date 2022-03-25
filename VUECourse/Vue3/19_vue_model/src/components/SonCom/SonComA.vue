<template>
  <div>
      {{firstName}}
      <button @click="onClickHandler">我是SonComA组件中的button</button>
  </div>
</template>

<script>
export default {
    props: ["firstName"],
    setup(props,{ emit }){
        const onClickHandler = () => {
            emit("onFirstNameChanged","王五");
        };
        return {
            onClickHandler
        }
    }
}
</script>

<style>

</style>