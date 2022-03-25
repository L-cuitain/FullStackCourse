<template>
  <div>
      {{firstName}} {{lastName}}
      <button @click="onClickHandler">我是SonComC组件中的button</button>
  </div>
</template>

<script>
export default {
    props: ["firstName","lastName"],
    setup(props,{emit}){
        const onClickHandler = () => {
            emit("update:firstName","刘备");
            emit("update:lastName","诸葛亮");
        };
        return{
            onClickHandler
        }
    }
}
</script>

<style>

</style>