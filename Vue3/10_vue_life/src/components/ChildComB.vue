<template>
  <div>
      {{count}}
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { onMounted , onUnmounted , onUpdated , ref } from "vue";

export default {
    setup(){
        let timer = null;
        //组件挂载完成后开启定时器
        onMounted(() => {
            timer = setInterval(() => {
                console.log("timer...");
            },1000);
        })
        //组件卸载完成后清除定时器
        onUnmounted(() => {
            clearInterval(timer);
        });
        const count = ref(0);
        const onClickHandler = () => {
            count.value = count.value + 1;
        }
        //组件更新之后在控制台中输出 onUpdated
        onUpdated(() => {
            console.log("onUpdated");
        });

        return{
            count,
            onClickHandler,
        }
    }
}
</script>

<style>

</style>