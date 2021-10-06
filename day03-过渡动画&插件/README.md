# 过渡动画
NuxtJS使用vue过度组件在路由切换时创建过渡/动画

## 实现思路
1. 创建布局文件layouts/default.vue 存放导航
2. pages目录下分别创建三个页面组件
3. 路由匹配的页面组件会自动添加类名
.page-enter
.page-enter-active
.page-leave
.page-leave-active
给其添加样式

/layouts/default.vue
```css
/* 过渡开始前和过渡结束后隐藏 */
.page-enter , .page-leave-to{
    opacity: 0;
}

/* 过渡激活状态显示 */
.page-enter-active , .page-leave-active{
    transition: opacity 0.5s;
}
```

## 自定义动画
* NuxtJS默认过渡名称为`page`
* 设置自定义动画,使用transition属性在页面中自定义动画名称
* 设置动画样式以自定义动画名称开头设置

```css
/* 自定义动画 动画进入前 */
.pop-enter-active{
    transform-origin: top;
    animation: bounce-in 0.8s;
}

@keyframes bounce-in{}
```

/pages/设置自定义动画文件
```js
export default {
    transition: 'prop'
}
```

# 插件
插件为js文件,写在`plugins`目录,每次刷新页面都会在服务器和客户端执行一遍

## 用途
在项目中集成使用自己的库或第三方库

## 插件分类
1. 默认插件,客户端和服务器端都会自动执行
    1. 注入插件: 插件注入后,可以在整个应用程序中都可以使用(axios封装)
    2. vue插件:插件注入后,可以结合vue进行辅助开发(Vant,Element UI库)
2. 客户端插件: 只在客户端自动执行的插件
3. 服务端插件: 只在服务端自动执行的插件

## 特性
每次刷新页面时都会预先执行




