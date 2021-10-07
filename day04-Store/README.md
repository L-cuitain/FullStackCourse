# Vuex 状态树(store)
Nuxt内核实现了`Vuex` , 可以使用状态树(Store)来管理状态(State)

## 基本用法
### 用途
* 保存数据
* 所有组件都可以直接使用

### Vuex组成
* state: 保存状态数据
* mutations: 同步修改数据函数
* getters: 计算属性函数
* actions: 异步修改数据函数(调用接口)

### 写法
/store/index.js
```js
//定义State
export const state = () => ({})


//定义 mutations
export const mutations =  {
    func(state,payload){}
}

//定义 actions
export const actions = {
    func({ commit },payload){
        //传值
        commit('同步方法',payload);
    }
}
```


/page/index.vue
```html
<h1>{{this.$store.参数名}}</h1>
```
```js
//同步传参
func(step){
    this.$store.commit('同步方法',step);
}

//异步传参
func(){
    this.$store.dispatch('异步方法',step);
}
```


### 辅助函数优化
/pages/index.vue
```js
//引入vuex 的状态
import { mapState , mapMutations , mapActions } from 'vuex';

//展开函数调用的返回值
export default {
    computed: mapState(['']),
    methods: {
        ...mapMutations(['']),
        ...mapActions([''])
    }
}
```


### 调用接口数据填充Vuex中
* 服务器端填充: 在fetch函数中调用接口填充数据
* 客户端填充: 不写在fetch中的代码


#### fetch方法特点
* fetch可以用于复用组件 asyncData只能在页面组件中使用
* fetch可以在服务端渲染数据,有利于SEO优化


## 分模块使用
大型项目数据放到Store会导致文件太大 , 这时可以分别保存在多个不同的文件中

### 用法
vuex会根据store目录下xxx.js自动拆分模块,使用时模块名就是文件名,默认为index模块,该模块使用时无需带模块名

store/index.js
* 使用state: $state.state.xxx
* 使用mutations: $store.state.commit('xxx')

store/xxx.js
* 使用state: $store.state.abc.xxx
* 使用mutations: $store.state.commit('abc/xxx')


## nuxtServerInit方法
### 特点
* 为vuex填充数据
* 项目中所有页面刷新时都会执行一次这个函数
* 只能写在store/index.js文件中

store/index.js
```js
 actions: {
       nuxtServerInit({ commit}, { req }) {
           if (req.session.user)
             commit('user', req.session.user)
       }
   }
```

