<template>
  <div class="home">
    <div v-if="$store.state.auth">
      <p>您已登录,可以访问<nuxt-link to="/my">我的页面</nuxt-link></p>
      <p><button @click="logOut">退出登录</button></p>
    </div>
    <div v-else>
      请<nuxt-link to="/login">登录</nuxt-link>
    </div>
  </div>
</template>

<script>
//引入js-cookie
const Cookie = require('js-cookie');

export default {
  methods:{
    logOut(){
      //创建定时器 删除token
      setTimeout(() => {
        this.$store.commit('setAuth',null);
        Cookie.remove('token');
      },2000)
    }
  }
}
</script>
