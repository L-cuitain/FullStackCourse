# React-Hook

## 相关参考
```
https://zh-hans.reactjs.org/docs/hooks-intro.html
```

## 概念
Hook 是一些可以让你在函数组件里"钩入" React state及生命周期等特性的函数

类似Vue3 compositionAPI 和 optionAPI关系

特点:
Hook 可以在不编写 class 的情况下使用 state 以及其他React特性
没有显性的生命周期 所有渲染后的执行方法都在useEffect里统一管理
某一个组件 方法需不需要渲染 重新执行完全取决于你 而且十分方便管理


## State Hook

### 起步
```js
//引入 useState Hook 它让我们在函数组件中储存内部state
import React , { useState } from 'react';

//创建函数
function Example(){
    //声明一个 count 变量
    //传入0作为useState初始化值
    //useState返回一对值:
    //当前状态 和 更新它的函数(类似 this.setState)
    const [count , setCount] = useState(0);

    return(
        <div>
            <h1>{count}</h1>
            {/* 当用户点击按钮后 传递一个新值给setCount React会重新渲染Example组件 并把最新的 count 传给它 */}
            <button onClick={() => setCount(count+1)}>点我增加值</button>
        </div>
    )
}
```


### 声明多个State变量
```js
function ExampleWithManyStates(){
    //声明多个 state 变量
    const [age , setAge] = useState(42);
    const [fruit , setFruit] = useState('banana');
    const [todos , setTodos  ] = useState([{text: 'learn hooks'}]);
}
```


### 读取State
```js
//在 class 中显示当前的 count 
<p>{this.state.count}</p>

//在 函数中 显示当前的 count
<p>{count}</p>
```


### 更新State
```js
//在 class 调用this.setState() 更新count值
<button onClick={() => {this.setState({count: this.state.count + 1})}}>Click Update</button>

//在 函数中 不需要this 更新count值
<button onClick={() => setCount(count + 1)}>Click Update</button>
```


### 方括号含义
```js
const [count, setCount] = useState(0);

//这种JavaScript语法叫数组结构
//它意味着同时创建两个变量 count , setCount
//count的值为 useState 返回的第一个值 , setCount是返回的第二个值
//等价于:
let result = useState('banana'); // 返回一个有两个元素的数组
let fruit = result[0]; // 数组里的第一个值
let setFruit = result[1]; // 数组里的第二个值
```



## Effect Hook

### 起步

useEffect可看成React三个生命周期钩子函数 componentDidMount , componentDidUpdate , componentWillUNmount的组合
特点:
* 函数里可以访问组件的props 和 state中的变量
* 可以在组件中多次使用useEffect

```js
import React , {useState , useEffect} from 'react';

function Example(){
    const [count , setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} times`;
    })

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Click Update</button>
        </div>
    )
}
```

### function 和 class 中实现运行一些额外代码(副作用)

#### Class
```js
//通过把副作用操作放到 componentDidMount 和 componentDidUpdate函数中
class Example extends React.component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
``` 


### Function
```js
//通过 Hook 实现副作用操作
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useEffect 作用
* 通过使用这个Hook 可以告诉React组件需要在渲染后执行某些操作.React会保存你传递的函数,并在执行DOM更新后调用它

* 将useEffect放在组件内部可以在Effect中直接访问变量

* 默认情况下 , useEffect在第一次渲染之后 和 每次更新之后都会执行


### function 和 class 清除副作用

#### Class
```js
//通过 componentWillUnmount钩子函数清除
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```


#### Function
```js
//通过 useEffect中返回一个函数 React将会在执行清除操作时调用
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

### useEffect 清除作用
* 每个Effect都可以返回一个清除函数

* React会在组件卸载时执行清除操作,Effect在每次渲染时都会执行

* effect返回的函数可以返回一个箭头函数或其他命名函数
