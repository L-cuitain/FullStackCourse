<template>
  <div>
    <h1>Home Page 表单</h1>
    <div class="form">
      <p>userName</p>
      <input name="userName" v-model="username"/><br />
      <p>nickName</p>
      <input name="nickName" v-model="nickname"/><br />
      <p>email</p>
      <input name="email" v-model="email"/><br />
      <button @click="addForm">submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      username: '',
      nickname: '',
      email: ''
    }
  },
  
  methods:{
    addForm(){
      // console.log(this.username);    
      //创建对象
      const user = {
        username:this.username,
        nickname: this.nickname,
        email: this.email
      }

      //发起请求
      axios.post(`http://localhost:8585/getForm`,user).then((res) => {
        console.log(res);
      });

    }
  }
};
</script>
