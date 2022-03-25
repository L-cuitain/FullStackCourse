<template>
  <div>
    {{person.name}}
    {{person.age}}

    <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default{
  setup(){
    //创建person对象
    const person = reactive({ name: "张三" , age: 20 });

    //点击事件
    const onClickHandler = () => {
      person.name = "里斯";
      person.age = 50;
    }
    return{
      person,
      onClickHandler
    }
  }
}
</script>

<style scoped>
</style>
