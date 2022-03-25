# NuxtJS脚手架学习

## 什么是NuxtJS
* NuxtJS是一个基于VueJS的通用应用框架
* NuxtJS主要关注应用的UI渲染
* NuxtJS预设了利用VueJS开发服务端渲染的应用所需要的各种配置

## 客户端&服务端渲染

### 客户端渲染
前端JS代码都是在浏览器中运行的:
服务器端 存储--(下载到客户端)--> 客户端 运行

好处:
代码在客户的浏览器中运行,消耗为客户的CPU和内存等资源,减轻服务器压力

缺点:
页面中没有初始数据(查看页面源代码没有数据),所以不利于SEO优化

客户端渲染特点:
* JS代码是在浏览器中运行
* 查看源代码时 , 看不到渲染出来的数据

### 服务端渲染
服务器端 运行 --(下载运行后的结果)--> 客户端 显示

服务端渲染特点:
* 解决SEO优化
* 前端源代码可以查看到数据

## 安装
npx
```
npx create-nuxt-app <项目名>
```

yarn
```
yarn create nuxt-app <项目名>
```

## 运行
开发时:
开启开发服务器
```
yarn dev

npm run dev
```

开发完:
打包
```
yarn build

npm run build
```

开启正式服务器
```
yarn start

npm run start
```

生成静态页
```
yarn generate

npm run generate
```

## 脚手架目录结构
| 目录名称       | 描述                                                      |
| -------------- | --------------------------------------------------------- |
| assets         | 资源目录,用于存放需要编译的静态资源                       |
| components     | vue组件目录,Nuxt.js不会增强该目录,不支持SSR               |
| layouts        | 布局组件目录                                              |
| pages          | 页面目录,所有的vue识图,nuxt根据目录结构自动生成对应的路由 |
| plugins        | 插件目录                                                  |
| static         | 静态文件目录,不需要编译的文件                             |
| store          | vuex目录                                                  |
| nuxt.config.js | nuxt个性化配置文件,内容覆盖默认                           |
| package.json   | 项目配置文件                                              |


### 页面组成
* 布局文件(根组件): 保存在layouts目录中 , 所有的页面都是布局文件中的子组件
    * 所有页面默认使用layouts/default.vue作为布局文件
* 页面组件(页面): 保存在pages目录 , 一个文件就是一个路由页面
    * 页面文件中还可以有多个组件文件
    * 如果要修改使用的布局文件可以在页面中使用 layout:'布局文件名' 来指定要使用的布局文件
* 组件文件(组件): 保存在components中 , 在每个页面中使用的组件

### 自定义错误页面
通过编辑layouts/error.vue来定制化错误页面

该文件放在layouts文件夹中 但应看做一个页面Page


## 路由
* Nuxt内置vue-router组件 , 可以直接使用
* 在Nuxt不需要自己配置路由,Nuxt会根据pages目录中的文件结构自动生成路由的配置


### 路由跳转
pages/
--| about.vue
--| index.vue
```js
<nuxt-link to="/about">跳转到关于页面</nuxt-link>

<nuxt-link to="/">跳转到首页</nuxt-link>
```

### 路由切换激活类名
当前路由选中后<nuxt-link>组件会自带激活类名
* nuxt-link-active 模糊匹配
* nuxt-link-exact-active 精确匹配

### 路由和文件关系

pages/
--| index.vue
```js
//访问 index.vue
<nuxt-link to="/"></nuxt-link>
```

pages/
--| login.vue
```js
//访问 login.vue
<nuxt-link to="/login"></nuxt-link>
```

pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```js
//访问 user目录中的one.vue
<nuxt-link to="/user/one"></nuxt-link>
```

pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue

```js
//访问 user目录中的index.vue
<nuxt-link to="/user"></nuxt-link>
```

### 路由参数
路由参数有两种:
* 路径参数: /goods/100
* 查询参数: /goods?id=100

为了能够配置路径参数 , 需要以_做为文件名的前缀
方式一: 路径参数

| 路径           | 对应文件         | 页面中接受                          |
| -------------- | ---------------- | ----------------------------------- |
| /goods/100     | /goods/_id.vue   | $route.params.id                    |
| /goods/100     | /goods/_i.vue    | $route.params.i                     |
| /goods/100/200 | /goods/_cid/_gid | $route.params.cid/$route.params.gid |

方式二: 查询参数

| 路径                     | 对应文件        | 页面中接受                        |
| ------------------------ | --------------- | --------------------------------- |
| /goods?id=100            | pages/goods.vue | $route.query.id                   |
| /goods/?id=12&sort=apple | pages/goods.vue | $route.query.id/$route.query.sort |

### 嵌套路由
1.在布局文件中使用<Nuxt />组件占位 , 存放一级路由页面 , 在一级路由页面使用<NuxtChild />存放二级路由页面
2.<nuxt-link>组件自带激活类名(路由匹配到时)
模糊匹配类名: nuxt-link-active
精确匹配类名: nuxt-link-exact-active