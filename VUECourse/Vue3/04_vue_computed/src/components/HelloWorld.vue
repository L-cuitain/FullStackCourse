<template>
  <div>
    <input type="text" v-model="search" />
    <ul>
      <li v-for="(item,index) in filterNames" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const names = ref([
      "林俊杰",
      "孙燕姿",
      "周杰伦",
      "张惠妹",
      "刘若英",
      "林宥嘉",
      "刘德华",
      "张韶涵",
      "周笔畅",
      "孙楠",
    ]);

    const search = ref("");
    const filterNames = computed(() =>
      names.value.filter((name) => name.includes(search.value))
    );
    return {
      search,
      filterNames,
    };
  },
};
</script>

<style scoped>
</style>
