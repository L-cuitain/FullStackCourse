<template>
  <div>
    <p>用户名:<input type="text" /></p>
    <p>密码: <input type="password"></p>
    <input type="submit" @click="login" value="登录">
  </div>
</template>

<script>
//引入js-cookie
const Cookie = require('js-cookie');

export default {    
    //创建登录方法
    methods:{
        login(){
            setTimeout(() => {
                const token = 'agdasgasdfadsdfa';
                this.$store.commit('setAuth',token);
                //设置token
                Cookie.set('token',token);
                //跳转
                this.$router.push('/');
            },1000)
        }
    }
}
</script>

<style>

</style>