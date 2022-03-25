<template>
  <!-- 总价 -->
  <div class="total">
    <span>总价：{{cartTotal}}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartTotal",
  props: {
    cartTotal: {
      type: Number,
      required: true,
    },
  },
  setup() {},
});
</script>

<style>
</style>