<template>
  <div>
      {{childMsg}}
      <hr />
      {{ msg }}
  </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: ["msg"],
    setup(props){
        //当父组件更新props时 setup 函数时不会重新执行的
        //所以在 setup 函数中使用 props 时需要用到 computed 或 watch 来响应 props 的变化
        //注意: 直接在模板中使用 props 数据时没有这个问题的
        const childMsg = computed(() => props.msg + "AA");
        return{
            childMsg
        }
    }
}
</script>

<style>

</style>