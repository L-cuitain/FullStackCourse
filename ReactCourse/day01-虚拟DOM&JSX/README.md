# React基础

## React开篇

### 使用React的2种方式

1.自行配置
1.1 https://zh-hans.reactjs.org/docs/add-react-to-a-website.html
2.通过脚手架自动配置
2.1 https://zh-hans.reactjs.org/docs/create-a-new-react-app.html

### 虚拟DOM和真实DOM

* 虚拟DOM是相对于浏览器所渲染出来的真实DOM的
* 虚拟DOM就是使用JS对象来表示页面上的真实DOM

### 如何创建虚拟DOM

createElement通过React.createElement()方法
 该方法接收三个参数:
 第一个参数: 需要创建的元素类型或组件
 第二个参数: 被创建出来的元素拥有的属性
 第三个参数: 被创建出来的元素拥有的内容(可以是多个)
https://zh-hans.reactjs.org/docs/react-api.html#

### 如何通过虚拟DOM渲染真实DOM到浏览器

   通过ReactDOM.render()方法
   该方法接收三个参数
   第一个参数: 被渲染的虚拟DOM
   第二个参数: 要渲染到哪个元素中
   第三个参数: 渲染或更新完成后的回调函数
 https://zh-hans.reactjs.org/docs/react-dom.html#render

### render方法的注意点

 多次渲染，后渲染会覆盖先渲染的
 render方法一次只能渲染一个元素/组件

### createElement方法注意点

可以添加3个以上参数，后续参数都会作为当前创建元素内容处理

## React中的JSX语法

### JSX是什么？

* 是一种JS和HTML混合的语法,将组件的结构、数据甚至样式都聚合在一起定义组件

```js
ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('root')
);
```

### 为什么要使用JSX

使用JSX使得我们在React中编写页面结构更为简单、灵活
JSX 是类型安全的， 在编译过程中就能发现错误
JSX 执行更快， 因为它在编译为JavaScript 代码后进行优化
防止XSS注入攻击
https://zh-hans.reactjs.org/docs/introducing-jsx.html

### JSX的本质

浏览器只认识JS不认识JSX，所以我们编写的JSX代码是无法在浏览器中执行的
为了解决这个问题，我们需要使用babel将JSX转换成JS，也就是转换成React.createElement()
https://zh-hans.reactjs.org/docs/react-without-jsx.html
https://babeljs.io/repl/

### 如何将JSX转换成JS?

导入babel.js
在script标签上添加type="text/babel"

### JSX表达式

在JSX中只要看到{}就会当做JS解析(执行里面的JS代码)
所以无论是绑定属性,还是绑定类名,还是绑定样式, 只需要将字符串改为{}
然后再通过JS动态获取, 动态绑定即可
注意：{} 中，不能出现语句！！！ if() {} / for() {} / switch...

以下嵌入的内容不会被显示出来 [] true false null undefined
如果想显示上面的内容，那么就必须转换成字符串，但是对于空数组而言，即使转换成字符串，也不能显示

```js
const name = 'jack'
const h1 = <div>{name}</div>
const h1 = <div>{19}</div>
const h1 = <div>{true + ''}</div>
const h1 = <div>{1 + 3 + 7 + 9}</div>
const h1 = <div>{['red', 'yellogreen', 'pink']}</div>
const h1 = <div>{['red', 'yellogreen', 'pink'].join('')}</div>
const h1 = <div>{Math.random() > 0.5 ? '大于' : '小于等于'}</div>
```


### JSX中的条件渲染

1.if/else
2.三元表达式
3.逻辑与运算符（&&）

```js
function Home(){
  if (flag) {
    return (
      <div>我是flag为true是显示的内容</div>
    )
  }

  return (
    <div>
      <p>我是flag为false时显示的内容</p>
    </div>
  )
}


function Home(){
  return flag ? (
    <div>我是flag为true是显示的内容</div>
  ) : (
    <div>
      <p>我是flag为false时显示的内容</p>
    </div>
  )
}


function Home(){
  return flag && (
    <div>我是flag为true是显示的内容</div>
  )
}
```

### JSX中的列表渲染

```js
    function Home() {
      return (
        <div>{
          songs.map(item => <p key={item.id}>{item.name}</p>)
        }</div>
      )
    }
```


### JSX中更新元素渲染

* React 元素都是`immutable`不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子
* 更新界面的唯一办法是创建一个新的元素，然后将它传入`ReactDOM.render()`方法

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
function tick() {
    const element = (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
    ReactDOM.render(element, root);
}
setInterval(tick, 1000);
```


### JSX中绑定属性

* JSX绑定内容
  * 在JSX中只要看到{} 就会当作js解析(执行里面的js代码)
  * 所以无论是绑定属性，还是绑定类名，还是绑定样式，只要将字符串改为{}
  * 再通过JS动态获取，动态绑定即可

* 绑定普通属性

```html
<p title="我是标题">我是段落</p>
<p title={message}>我是段落</p>
```

* 绑定类名(className)
  * 由于JSX本质是转换成JS代码, 而在JS中class有特殊含义, 所以不能使用
  * 同理可证, 但凡是属性名称是JS关键字的都不能直接使用  

* 绑定样式(style)
  * 由于样式是键值对形式的, 所以在JSX中如果想要动态绑定样式
  * 必须将样式放到一个对象中, 并且所有以-连接的样式名称都要转换成驼峰命名
  * `<p style={{color:'red', fontSize:'50px'}}>绑定样式</p>`


### React只会更新必要部分

* React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。
* 即便我们每秒都创建了一个描述整个UI树的新元素，React DOM 也只会更新渲染文本节点中发生变化的内容

