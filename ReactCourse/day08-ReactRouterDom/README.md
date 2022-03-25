# React路由

## 导入
安装 react-router-dom
```bash
yarn add react-router-dom
```

引入 react-router-dom
```js
import { BrowserRouter , HashRouter , Link , NavLink , Route } from 'react-router-dom';

```

router参数:
* BrowserRouter: history模式的URL www.baidu.com/a/b/c 优点: 手动切换路由方便 H5新特性

* HashRouter: hash模式的URL www.baidu.com/#/a/b/c 优点: 兼容性强

* Link: 用来改变浏览器中的URL 编译完为 a标签

* to: 跳转的路由 
```js
<Link to="/about">
    <Text>About</Text>
</Link>
```

* NavLink: 和Link一样 编译完为 a标签

* activeStyle 设置选中后的样式

* activeClassName 设置类名

* Route组件: 占位符 , 用来展示组件

* path属性: 配置路由规则

* component属性: 指定当前路由规则匹配时要展示的组件
```js
<Route path="/user/:username" component={User} />
```

* exact 精确匹配
    * 解决具有多个相似名称的路径
    * 并且能解决跳转其他路由 to="/"路由样式还是存在

## Switch
默认路由会从上至下匹配所有Route路由 只要匹配都会显示

Switch: 只匹配一个Route 匹配到则不会继续匹配

```js
<Switch><Route></Route></Switch>
```

## Redirect
资源重定向 在访问某个资源地址时重定向到另外一个资源地址

```js
<Redirect to="">
```

## 嵌套路由
在一个路由中添加子路由
嵌套路由，不能在父级家 exact，因为先要匹配父级然后才能匹配子集

## 手动路由跳转
通过JS设置资源地址
Hash模式 
只需要通过JS设置Hash值
```js
window.location.hash="hash值"
```

history模式
一个组件通过路由创建 系统会自动传递一个history
```js
this.props.history.push('地址值');
```