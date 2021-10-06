<template>
  <div>
    <nav class="nav">
      <ul>
        <li>
          <!-- <NuxtLink to="/">Home</NuxtLink> -->
          <span :class="{active:active[0].bool}" @click="go('/')">Home</span>
        </li>
        <li>
          <!-- <NuxtLink to="/about">About Page</NuxtLink> -->
          <span :class="{active:active[1].bool}" @click="go('/about')">About Page</span>
        </li>
        <li>
            <!-- <NuxtLink to="/parent">Parent Page</NuxtLink> -->
            <span :class="{active:active[2].bool}" @click="go('/parent')">Parent Page</span>
        </li>
      </ul>
    </nav>
    <main>
      <!-- <img src="~/assets/logo.svg" /> -->
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active: [{name:'/',bool:true},{name:'/about',bool:false},{name:'/parent',bool:false}]
    }
  },
  methods:{
    go(path){
      this.active.forEach(item => item.bool = false);

      let index = this.active.findIndex(item => item.name === path);
      this.active[index].bool = true;

      //跳转到此路由
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  text-decoration: none;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}

/* 激活样式 */
.nuxt-link-exact-active,.active {
  color: #00c58e;
}
</style>