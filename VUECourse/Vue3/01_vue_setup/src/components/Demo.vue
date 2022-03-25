<template>
  <div>
      {{name}}
      {{age}}
    
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
export default {
  //组合式API入口 setup函数在任何生命周期函数之前执行
  setup() {
    //undefined
    console.log(this);

    let name = "张三";
    let age = 20;

    const onClickHandler = () => {
        name = "里斯";
        age = 30;
    }

    //返回字段
    return {
      name,
      age,
      onClickHandler
    };
  },
  beforeCreate() {
    //before create
    console.log("before create");
  },
};
</script>

<style>
</style>