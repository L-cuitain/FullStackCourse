<template>
  <div>
      <h1>详情</h1>
        <p>标题: {{detail.title}}</p>
        <p v-html="detail.content"></p>
  </div>
</template>

<script>
export default {
    //发起请求 获取详情
    async asyncData({ params , app }){
      console.log(params.id);
      //发送请求
      const { data:{data: detail} } = await app.$api.getTopicsDetail(`/topic/${params.id}`);
      console.log(detail);
      //返回detail
      return {
        detail
      }
    }
}
</script>

<style>

</style>