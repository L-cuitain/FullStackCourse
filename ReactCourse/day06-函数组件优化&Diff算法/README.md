# React函数组件优化

## React.memo
对于函数组件:
没有继承关系
没有生命周期方法

```js
//通过React.memo()高阶函数 可以返回一个优化后的组件
const Home = React.memo(() => {
    return ()
})
```

好处:
* React会在相同props的情况下 不做重新渲染而是复用之前的渲染结果
* React.memo 仅检查props变更


# Diff算法

## React设计动机
在某一时间节点调用 React 的 render() 方法 会创建一棵由React元素组成的树

在下一次state和props更新时 , 相同的 render() 方法会返回一棵不同的树

React需要基于这两课树之间的差别来判断如何高效更新UI

算法复杂程度为 O(n 3 )  n为树中元素的数量

React提出一套 O(n)的启发式算法:
* 两个不同类型的元素会产生出不同的树
* 开发者可以通过设置 key 属性 , 来告知渲染哪些子元素在不同的渲染下可以保存不变


## 对比不同类型元素
当根节点为不同类型的元素时 React会拆卸原有的树并建立新的树

当卸载一棵树时 对应的DOM节点也会被销毁 组件实例将执行componentWillUnmount()方法

```js
// 在根节点以下的组件也会被卸载
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

React 会销毁 Counter 组件并且重装载一个新的组件


## 对比同一类型的元素
```js
// 当对比两个相同类型的 React 元素时 , React会保留 DOM 节点 只需要修改 DOM 元素上的 className 属性
<div className="before" title="stuff" />

<div className="after" title="stuff" />

// 当更新 style 属性时 , React仅更新有所变更的属性
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />

```


## 对比同类型的组件元素
当一个组件更新时 , 组件实例会保持不变 , React 将更新该组件实例的 props 保证与最新的元素保持一致 , 并调用该实例的 componentDidUpdate()方法

下一步 , 调用 render() 方法 


## 对子节点进行递归
```js
// 在子元素列表末尾新增元素时 更新开销较小
// 执行流程: 
// 匹配两个<li>first</li>对应的树 --> 匹配第二个元素<li>second</li>对应的树 --> 插入第三个元素的<li>third</li>
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>


// 将新增元素插入到表头 更新开销较大
// 执行流程: React会重建每一个子元素
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

## Keys
```js
// 解决新增元素问题 React 引入 key 属性
//React使用 key 匹配原有树上的子元素以及最新树上的子元素
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

# Portals
Portals 将子节点渲染到存在于父组件以外的DOM节点

child: 任何可渲染的 React 子元素 this.props.children
container: DOM元素
```js
ReactDOM.createPortal(child,container)
```

# Fragment
Fragment三种书写方式:
* <Fragment></Fragment>
* <React.Fragment></React.Fragment>
* <></>

Fragment 与 React.Fragment 只支持 key 和 children 属性 , <></> 不支持任何属性 


# StrictMode
格式: <React.StrictMode>组件</React.StrictMode>

作用: 开启严格模式 检查后代组件中是否存在潜在问题

注意点:
* 和Fragment一样 不会渲染出任何UI元素
* 仅在'开发模式'下有效

StrictMode检查:
* 检查过时或废弃的属性/方法/..
* 检查意外副作用
* 此组件的constructor会被调用两次
* 检查这里写的一些逻辑代码被调用多次时 , 是否会产生一些副作用


# 组件样式

## 行内样式
优点: 
* 行内样式 , 样式之间不会有冲突
* 可以动态获取当前state中的状态

缺点: 
* 写法上都需要使用驼峰标识
* 某些样式没有提示
* 大量样式 代码混乱
* 某些样式无法编写(伪类/伪元素)


## 外链样式
优点: 
* 编写简单 有代码提示 支持所有CSS语法

缺点:
* 不可以动态获取当前state状态
* 全局css 样式之间会影响


## CSS模块化
React脚手架内置 css modules配置
.css/.less/.scss等样式文件都修改成 .module.css/.module.less/.module.scss等

CSS module 优点:
* 编写简单 有代码提示 支持所有CSS语法
* 解决了全局样式相互污染问题

CSS module缺点
* 不可以动态获取当前state中的状态
