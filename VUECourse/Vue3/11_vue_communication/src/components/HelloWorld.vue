<template>
  <div>
    <div v-if="loading">loading...</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="data && data.length > 0">
      <ul>
        <li v-for="(item,index) in data" :key="index">{{item.title}}</li>
      </ul>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';

function usePosts(){
    //用于存储列表数据
    const data = ref(null);
    //用于标识加载状态
    const loading = ref(false);
    //用于存储错误信息
    const error = ref(null); 
    //用于发送请求方法
    async function getPosts(){
      //更新加载状态
      loading.value = true;
      //try catch捕获异常
      try{
        //发送请求
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //存储列表数据
        data.value = response.data;
      }catch(err){
        //存储错误信息
        error.value = err.message;
      }
      //更新加载状态
      loading.value = false;
    }
    //调用方法 发送请求
    getPosts();
}

export default{
  setup(){
    const { data , loading , error , getPosts } = usePosts();

    getPosts();
    
    //返回模板所需数据
    return{
      data,
      loading,
      error
    }
  }
}
</script>


<style scoped>

</style>
