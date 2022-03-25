<template>
  <div>
      child component
  </div>
</template>

<script>
export default {
    name: "ChildComponent",
    setup(){
        //setup 函数会在组件每次重新渲染时执行
        console.log("setup");
    }
}
</script>

<style>

</style>