<template>
  <div>
      {{modelValue}}
      <button @click="onClickHandler">我是SonComB组件中的button</button>
  </div>
</template>

<script>
export default {
    props: ["modelValue"],
    setup(props,{emit}){
        const onClickHandler = () => {
            emit("update:modelValue","王五");
        };
        return{
            onClickHandler
        }
    }
}
</script>

<style>

</style>