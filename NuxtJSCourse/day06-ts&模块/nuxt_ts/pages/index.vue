<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="deIncrement">deIncrement</button>
  </div>
</template>

<script lang="ts">
//ts
// import {Vue , Component } from 'vue-property-decorator';

// @Component
// export default class PageIndex extends Vue {
//   //定义count
//   count:number = 0;

//   //定义增加方法
//   increment(){
//     this.count++;
//   }

//   //定义减少方法
//   deIncrement(){
//     this.count--;
//   }
// }


// composition-api
import { defineComponent , ref } from '@vue/composition-api';

const counter = (ref:Function)=>{
  const count = ref(0);

  const increment = () => count.value++;
  const deIncrement = () => count.value--;

  return{
    count,
    increment,
    deIncrement
  }
}

export default defineComponent({
  setup(){
    return {
      ...counter(ref)
    }
  }
})
</script>
