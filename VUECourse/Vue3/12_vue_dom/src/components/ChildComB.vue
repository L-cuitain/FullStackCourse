<template>
  <div>
      <ul>
          <li v-for="(item,index) in list" :key="index" :ref="(el) => (elms[index] = el)">{{item}}</li>
      </ul>
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref , onMounted , onUpdated } from "vue";

export default {
    setup(){
        const list = ref(["a","b","c"]);
        const elms = ref([]);
        const onClickHandler = () => list.value.push("d")
        onMounted(() => console.log(elms.value));
        onUpdated(() => console.log(elms.value));
        return{
            list,
            elms,
            onClickHandler
        }
    }
}
</script>

<style>

</style>