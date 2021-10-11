# nuxt集成typescript
## 创建项目
```
yarn create nuxt-app 项目名

选择typescript
```

## 使用类创建组件
[使用文档](https://www.npmjs.com/package/vue-property-decorator)

### 安装
```
yarn add vue-property-decorator vue-class-component
```

### 编写格式
/pages/index.vue
```ts
<script lang="ts">
//引入
import {Vue , Component } from 'vue-property-decorator';

@Component
export default class PageIndex extends Vue {
  //定义变量
  count:number = 0;

  //定义增加方法
  increment(){}
}
</script>
```


## composition-api
[使用文档](https://www.npmjs.com/package/@vue/composition-api)

### 安装
```
yarn add @vue/composition-api
```

### 编写
1. 注册composition-api插件
/plugins/composition-api.js
```js
import Vue from 'vue';
import VueComposition from '@vue/composition-api';

//注册composition-api插件
Vue.use(VueComposition);
```

2. nuxt.config.vue中注册插件
```js
plugins: [
    '~/plugins/composition-api'
  ],
```

3. /pages/index.vue使用
```js
import { defineComponent , ref } from '@vue/composition-api';

const counter = (ref:Function)=>{
  const count = ref(0);

  const increment = () => count.value++;
  const deIncrement = () => count.value--;

  return{
    count,
    increment,
    deIncrement
  }
}

export default defineComponent({
  setup(){
    return {
      ...counter(ref)
    }
  }
})
```


# 模块
## 分类
### 第三方模块 axios
### Nuxt.js 提供 官方 模块
* @nuxt/http: 基于`ky-universal`的轻量级和通用的HTTP请求
* @nuxtjs/axios: 安全和使用简单 `Axios`与`Nuxt.js`集成用来请求HTTP

## @nuxt/http
### 安装
```
yarn add @nuxt/http -D
```

### 编写步骤
1. nuxt.config.js导入插件
```js
modules: [
    '@nuxt/http'
  ],
```

2. /pages/index.vue发起请求
```js
async asyncData({ $http }){
    let {} = await $http.$get('');
    return{}
  }
```


## @nuxt/axios
### 安装
```
yarn add @nuxtjs/axios -D
```


### 编写步骤
1. nuxt.config.js导入插件
```js
modules: [
    '@nuxtjs/axios'
  ],
```

2. /pages/index.vue发起请求
```js
async asyncData({ $axios }){
    let {} = await $axios.$get('');
    return{}
  }
```


## baseURL设置
1. nuxt.config.js
```js
axios:{
    baseURL: 'https://cnodejs.org/api/v1'
  },
  
http:{
    baseURL: 'https://cnodejs.org/api/v1'
  }
```

2. /pages/index.vue设置请求地址 发起请求
