# asyncData
NuxtJS增加`asyncData`的方法 , 能够在设置组件的数据之前异步获取或处理数据

## 什么时候使用
* 只能用在页面文件中(page目录下的文件中)
* 在获取页面初始化异步数据时使用

## 为什么使用
* 在asyncData获取的数据会显示在页面源代码中 , 有利于SEO

## 特点
* 需要return一个数据 , 这个数据可以在页面中使用
* 可以在服务端或路由更新之前被调用
    * asyncData函数默认在服务端渲染
    * asyncData函数在当前所在页面刷新后在服务端渲染
    * asyncData函数在路由跳转时在客户端渲染

## 实现

### return数据
```js
<script>
export default {
    asyncData () {
        return {
            msg:'hello nuxt.js'
        }
    }
}
</script>
```

### 返回promise
原生
```js
asyncData(){
    return axios.get('https://cnodejs.org/api/v1/topics').then(res => {
        return{
            list: res.data.data
        }
    })
}
```

使用async await
```js
async asyncData(){
    const { data:{data:topics} } = await axios.get('https://cnodejs.org/api/v1/topics');
    return{
        list: topics
    }
}
```

## 服务器端执行生命周期

| 功能                  | 执行位置           |
| --------------------- | ------------------ |
| 中间件                | 服务器 或 路由更新 |
| asyncData             | 服务器 或 路由更新 |
| fetch                 | 服务器 或 路由更新 |
| created,beforeCreated | 服务器 或 路由更新 |
| nuxtServerInt         | 服务器端           |


### 区分代码执行位置
1. console.log()
为了能区分代码执行的位置 , Nuxt会把服务器执行的代码输出到Nuxt SSR中,可以在浏览器的工具中查看

2. process.server
有些代码在服务器和客户端都会执行一遍,beforeCreated created 生成生命周期函数
对于既在服务器端执行又在客户端执行的代码,可以使用process.server来判断当前环境,然后针对不同的环境执行代码
```
rendering: process.server ? "server" : "client"
```


# 中间件

## 概念
在访问一个组件之前自动执行的函数

## 应用场景
可以用来做权限验证等功能

## 执行范围
* 全局执行: 在加载所有的组件之前都会被自动调用->需要在配置文件中配置
* 布局文件执行: 在某些组件加载之前会被自动执行->写布局文件中写中间件
* 单个文件执行: 在某一个组件加载之前会被自动执行->直接卸载这个文件即可

## 中间件的执行时机:
* 服务端执行: 浏览器刷新页面 , 请求此页面路径时
* 客户端执行: 切换组件时


## 注意事项
* 中间件会在前后端都执行,需要判断环境
* 只有前端能操作浏览器
* 如果后端属于node环境,不能操作浏览器,不能使用localStorage等浏览器专用的API
* 中间件执行流程顺序:
    * nuxt.config.js
    * 匹配布局
    * 匹配页面




# 资源文件
## 使用css/html预处理器

### 目的
为了更高效或更简洁的编写html,css代码

### css常见预处理:
* sass
* less
* stylus

实现思路:
1.安装
```
yarn add less less-loader@7.3.0
```

2.创建公共类库文件 assets/less/base.less文件

3.创建全局变量文件 assets/less/variables.less
```js
@primary:orangered;
@secondary:dodgerblue;
```

4.安装@nuxtjs/style-resources
```
yarn add -D @nuxtjs/style-resources
```

5.配置nuxt.config.js
```js
css: [
    '~/assets/less/base.less',
    '~/assets/scss/base.scss'
],
buildModules: [
    '@nuxtjs/style-resources'
],
// global style resources
styleResources:{
    less:[
        '~/assets/less/variables.less'
    ],
    scss:[
        '~/assets/scss/variables.scss'
    ]
},
```

### html预处理器
* pug  

实现思路:
1.安装pug
```
yarn add -D pug pug-plain-loader
```

2.使用
```js
<template lang="pug">
    div
      h1 Hello Nuxters! 👋
      p This page uses less add scss
</template>

<style lang="scss" scoped>
div {
  p {
    color: $secondary;
  }
}
</style>
```

## assets目录

### 特点
* assets目录下的图片,less,sass等资源会被webpack编译
* 行内样式使用图片时,不会被webpack编译,需要手动使用require加载图片

### 实现
```js
// img标签显示图片
<img src="~/assets/imgs/1.jpg" alt="" />

// 类名显示图片
// .pic {
//   width: 200px;
//   height: 200px;
//   background: url(~/assets/imgs/2.jpg) no-repeat;
//   background-size: contain;
// }
<div class="pic"></div>

// 行内样式显示图片
//stylePic: `background:url(${require("~/assets/imgs/3.jpg")})`
<div class="stylePic" :style="stylePic"></div>
```


## static目录
### 特点
* 加载时资源相对static目录找资源,如:加载assets目录下的文件
```html
<img src="1.png">
```

* Nuxt直接使用资源文件 , 不做任何处理

### 实现
```js
//使用img标签显示图片
<img src="imgs/1.jpg" alt="" />

//使用类名显示图片
// .pic {
//   width: 200px;
//   height: 200px;
//   /* 类名加载static下的图片需要补全路径 */
//   background: url(~/static/imgs/2.jpg) no-repeat;
//   background-size: contain;
// }
<div class="pic"></div>

//使用行内样式显示图片
//stylePic: `background:url(${require("~/static/imgs/3.jpg")})`
<div class="stylePic" :style="stylePic"></div>
```