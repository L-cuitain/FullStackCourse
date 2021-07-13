# React组件

## 组件 & Props
* 可以将UI切分成一些独立的、可复用的部件 , 这样就只需专注于构建每一个单独的部件
* 组件从概念上类似于JavaScript函数 它接受任意的入参(props) , 并返回用于描述页面展示内容的React元素

### 函数组件
* 函数式组件也称为无状态组件
    * 负责展示内容(静态)
* 函数组件接受一个单一的`props`对象并返回一个React元素

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

function Welcome(props){
    return <h1>Hello , {props.name}</h1>;
}

ReactDOM.render(<Welcome name="张三">,root);
```


### 类组件
* 类组件也被称为有状态组件
    * 负责更新UI 让页面"动"起来
* 定义一个类 在这个类中实现render方法 , 在render方法中返回组件的结构即可

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

class Welcome extends React.Component {
   render(){
       return <h1>Hello , {this.props.name}</h1>
   } 
}

ReactDOM.render(<Welcome name="张三">,root);
```

### 组件渲染
* React元素不但可以是DOM标签 , 还可以是用户自定义的组件
* 当React元素为用户自定义组件时 , 它会将JSX所接收的属性(attributes)转换为单个对象传递给组件,这个对象被称为`props`
* 组件名称必须以大写字母开头
* 组件必须在使用时定义或引用
* 组件的返回值只能有一个根元素
```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

function Welcome(props){
    return <h1>Hello , {props.name}</h1>
} 

class Welcome2 extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>;
    }
}

const element1 = <Welcome name="zhangsan" />;
console.log(element1.props.name);
const element2 = <Welcome name="zhangsan" />;
console.log(element1.props.name);

ReactDOM.render(
    <div>{element1}{element2}</div>,
    root
)
```


## 状态
* 组件的数据来源有两个地方 , 分别是属性对象和状态对象
* 属性是父组件传递过来的(默认属性,属性校验)
* 状态是自己内部的,改变状态唯一方式为`setState`
* 属性和状态的变化都会影响视图更新


### 有状态组件的state & 修改state
如何初始化状态
* 在constructor中 通过`this.state`来初始化
* 通过ES6实例属性的简化来初始化

state是一个对象 是组件内部私有状态 只能在组件内部使用

修改
语法: this.setState({})
* setState方法参数是一个对象
* 对象中的键表示要修改的状态名称 值表示要更新最新值

不能直接修改State中的数据
例: this.state.count = 1;

setState()方法两个作用:
* 修改状态
* 更新UI(页面)

```js
import React from 'react';
import ReactDOM from 'react-dom';
interface Props{

}

interface State{
    number: number
}

class Clock extends React.Component<Props,State>{
    timerID
    constructor(props){
        super(props);
        this.state = { 
            number: 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => {
                this.setState({ number: this.state.number + 1 })
            },
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <p>{this.state.number}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)
```

### State的更新可能是异步
* 处于性能考虑 React可能会把多个setState()调用合并成一个调用
* 因为this.props 和 this.state可能会异步更新 , 所以不要依赖它们的值来更新下一个状态
* 可以让setState()接收一个函数而不是一个对象 , 这个函数用上一个 state 作为第一个参数

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }
    handleClick = () => {
        this.setState((state) => (
            { number : state.number + 1 }
        ));
        this.setState((state) => (
            { number: state.number + 1 }
        ));
    }
    render(){
        return (
            <div>
                <p>{ this.state.number }</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)
```

### State 的更新会被合并
* 当调用 setState() 时 , React会把提供的对象合并到当前的state

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'zhangsan',
            number: 0
        };
    }
    handleClick = () => {
        this.setState((state) => (
            { number: state.number + 1 }
        ));
        this.setState((state) => (
            { number: state.number + 1 }
        ))
    }

    render(){
        return (
            <div>
                <p>{this.state.name}: {this.state.number}</p>
            </div>
        )
    }
}
```


## 受控组件
受控组件: 其值受到React控制的表单元素叫做受控组件


## this指向
* 方式一: 利用箭头函数
    * 箭头函数: 自身没有this 箭头函数内部的this指向了外层环境(函数)的this

* 方式二: 利用bind
    * 先在constructor中 使用bind将 事件处理程序与this绑定
    * 再在render方法中给按钮 绑定事件 此时的this.handleClick就是绑定好this的事件处理程序

* 方式三: 利用箭头函数形式的实例方法

```js
class LoggingButton extends React.Component{
    handleClick(){
        console.log('this is:',this);
    }
    handleClick1 = () => {
        console.log('this is;',this);
    }
    render(){
        return (
            <button onClick={(event) => this.handleClick(event)}>
                Click me
            </button>
            <button onClick={this.handleClick.bind(this)}>
                Click me
            </button>
        )
    }
}
```


