<template>
  <div>
    <button @click='submit()'>点我获取token</button>
    <button @click='getUser()'>点我获取用户</button>
  </div>
</template>

<script>
//引入axios
import axios from 'axios';

export default {
  methods:{
    submit(){
      axios.post('http://localhost:3001/login',{
        name: '张三',
        password: '123456'
      }).then(({ data }) => {
        if(data.code === 200){
          localStorage.setItem('token',data.token);
          localStorage.setItem('token_exp',new Date().getTime());
          this.$router.push('/');
        }else{
          console.log(data.msg);
        }
      })
    },

    getUser(){
      axios.get('http://localhost:3001/user').then(({data}) => {
        if(data.code === 200){
          console.log(data.user);
        }
      })
    }
  }
}
</script>
