<template>
  <div>
      {{childMsg}}
      <hr />
      {{msg}}
      <hr />
      <button @click="onMsgChanged">change msg</button>
  </div>
</template>

<script>
export default {
    props: ["msg"],
    setup(props,{ emit }){
        const onMsgChanged = () => {
            emit("onMsgChanged","change msg from children");
        }
        return{
            onMsgChanged
        }
    }
}
</script>

<style>

</style>