<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Page</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/parent">Parent Page</NuxtLink>
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

}
</script>

<style>
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
a.nuxt-link-active{
    font-weight: bold;
}

a.nuxt-link-exact-active{
    color: #00c58e;
}
</style>