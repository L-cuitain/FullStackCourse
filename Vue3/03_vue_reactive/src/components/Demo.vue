<template>
  <div>
      {{ name }}

      <button @click="onClickHandler" >button</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
    setup(){
        let name = reactive("张三");
        const onClickHandler = () => {
            name = reactive("里斯");
        }
        return {
            name,
            onClickHandler
        }
    }
}
</script>

<style>

</style>