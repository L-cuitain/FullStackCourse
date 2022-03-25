<template>
  <!-- title -->
  <div class="title">{{title}}</div>
  <!-- 列表 -->
</template>

<script lang="ts">
import { defineComponent , ref } from "vue";

export default defineComponent({
    name: 'CartTitle',
    setup(){
        const title = ref<string>('苏傲的setu库');
        return{
            title
        }
    }
});
</script>

<style>
</style>