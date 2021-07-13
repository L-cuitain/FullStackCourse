# React组件

## 非受控组件 Ref
对于某一个表单元素 借助于ref 使用原生DOM方式来获取表单元素值这样的元素叫做非受控组件
ref作用: 获取DOM或组件

书写格式:
* 在constructor中 创建变量存储 const A = React.createRef();
* 在需要获取元素的标签添加属性 ref={this.A}
* 在方法中通过 this.A.current获取值


### 为DOM元素添加 Ref
* 可以使用 ref 去存储DOM节点的引用
* 当ref属性用于HTML元素时,构造函数中使用React.createRef() 创建的ref接收底层DOM元素作为其current属性

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Sum extends React.Component{
    a
    b
    result
    constructor(props){
        super(props);
        this.a = React.createRef();
        this.b = React.createRef();
        this.result = React.createRef();
    }

    handleAdd = () => {
        let a = this.a.current.value;
        let b = this.b.current.value;
        this.result.current.value = a + b;
    }

    render(){
        return (
            <>
                <input ref={this.a} />+
                <input ref={this.b} />
                <button onClick={this.handleAdd}>=</button>
                <input ref={this.result}>
            </>    
        );
    }
}

ReactDOM.render(
    <Sum />,
    document.getElementById('root')
)
```


### 为class组件添加 Ref
* 当 ref 属性用于自定义class组件时 , ref对象接收组件的挂载实例作为其current属性

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component{
    input
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.getFocus();
    }
    render(){
        return 
    }
}

class TextInput extends React.Component {
    input
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.focus();
    }
    render(){
        return <input ref={this.input} />
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
```

### Ref转发
* 无法在函数组件上使用ref属性,因为它们没有实例
* Ref 转发是一项将ref自动地通过组件传递到其一子组件的技巧
* Ref 转发允许某些组件接收 ref , 并将其向下传递(转发)给子组件

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component{
    input
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.getFocus();
    }
    render(){
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获得焦点</button>
            </>
        );
    }
}

function TextInput(){
    return <input />
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
)
```

使用forwardRef
```js
import React from 'react';
import ReactDOM from 'react-dom';
interface InputProps{}
const TextInput = React.forwardRef((props,ref) => (
    <input ref={ref} />
));

class Form extends React.Component {
    input
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        console.log(this.input.current);
        this.input.current.focus();
    }
    render(){
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获得焦点</button>
            </>    
        )
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
)   
```


## 组件通讯

### 函数组件通信

### 类组件通信

### 子组件声明默认值
函数组件声明
在函数外定义 方法名.defaultProps = { 属性: 属性值 }

类组件声明
在类中定义 static defaultProps = { 属性: 属性值 }


### 组件的props数据类型的限制
函数组件规定类型
引入 prop-types  import propTypes from "prop-types";
在函数外定义 方法名.propTypes = { 属性: propTypes.规定类型 }


类组件规定类型
引入 prop-types  import propTypes from "prop-types";
在类中声明 static propTypes = { 属性: propTypes.规定类型 }


### 子父组件的通信
* 子组件向父组件传值
    * 在父组件上声明一个方法
    * 把父组件声明的方法传递给子组件
    * 在组件中声明数据
    * 触发子组件的一个方法 在方法中 调用父组件传递给子组件的方法(props) 把数据当作参数返回给父组件

* 父组件向子组件传值
    * 在父组件中的子组件标签中自定义属性
    * 通过自定义属性将值传递给子组件
    * 子组件通过props获取属性值

* props获取的两种方式
    * 函数组件式:
        const 函数名 = (props)=> {}
    * 类组件式:
        在类中直接声明this.props.属性值


### state 和 props 的区别
state是类组件中私有数据 
props是父组件传递给子组件的数据 相当于公共数据


### 兄弟间通信
需要一个中间类组件来传递参数


### Context(跨组件传值)
```js
// 跨组件传值
// 通过引入Context获取到Provider Consumer两个对象
const { Provider , Consumer } = React.createContext();

// 在父组件中 通过 Provider 创建值
<Provider value="值">子组件</Provider>

// 在子组件中 通过 Consumer 获取到值
<Consumer>{(data) => {函数体}}</Consumer>
```