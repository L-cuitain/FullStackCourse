<template>
  <div>
    <p>{{ person.brand.title }} {{ person.name }}</p>
    <button @click="changeBrandTitle">title</button>
    <button @click="changeName">name</button>
  </div>
</template>

<script>
import { ref , watch } from 'vue';

export default {
  setup() {
    const person = ref({ brand: { title: "宝马" }, name: "张三" });
    const changeBrandTitle = () => {
      person.value.brand.title = "奔驰";
    };
    const changeName = () => {
      person.value.name = "里斯";
    };
    watch(person.value.brand, (current) => {
      console.log(current);
    });
    return {
      person,
      changeBrandTitle,
      changeName,
    };
  },
};
</script>

<style>
</style>