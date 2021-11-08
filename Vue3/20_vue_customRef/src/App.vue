<template>
  <div>
    <input type="text" v-model="keyword">
    {{ keyword }}
  </div>
</template>


<script>
import { customRef } from "vue";

export default{
  setup(){
    const keyword = useDebounceRef("Hello",400);
    return{
      keyword
    }
  }
}

function useDebounceRef(initialValue,delay){
  let timer = null;
  return customRef((track,trigger) => {
    return {
      get(){
        //跟踪 initialValue 值的变量
        track();
        return initialValue;
      },
      set(newValue){
        clearTimeout(timer);
        timer = setTimeout(() => {
          initialValue = newValue;
          //触发视图更新
          trigger();
        },delay);
      }
    }
  })
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
