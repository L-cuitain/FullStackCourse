# React高阶组件

## 概念
高阶组件是参数为组件 返回值为新组件函数 它会接收一个组件作为参数并返回一个经过改造后的新组件:
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

区分:
组件是将 props 转换为 UI , 而高阶组件将组件转换为另一个组件

为什么使用:
抽取重复代码 , 实现组件复用 常见场景: 页面复用

实现方式:
* 属性代理
    * 返回一个无状态的函数组件
    * 返回一个class组件

* 反向继承


## 实现(属性代理)
```js
// 1.高阶组件封装
// 1.1.定义 A 函数 
// 参数: WrappedComponent 
// 返回值: class类组件
function A(WrappedComponent){
return class extends React.Component{}
}

// 1.2.在 A函数 类组件中 定义 state参数 和 方法 

// 1.3.在 A函数 类组件中 render 返回一个 <WrappedComponent {...this.state} />


// 2.高阶组件调用
// 2.1.导入封装好的组件函数 A
import A from '../HocCom';

// 2.2.将写好的组件样式函数作为参数 传入给 A 返回一个组件 B
const Position = state => {
   return(
        <div>
            <p>{state.X}--{state.Y}</p>
        </div>
    )
}

const B = A(Position); 


// 2.3.挂载组件 B 启动服务显示样式
```

## 高阶组件: 包装显示名称以便轻松调用
```js
//HOC创建的容器组件会与任何其他组件一样 会显示在 React Developer Tools 中  为了方便调试 请选择一个显示名称 以表明它是HOC的产物
//常见方式:
//高阶组件名为 WithSubscription  被包装组件显示名称为 CommentList 显示名称应为 WithSubscription(CommentList)
//例:
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```


## 给高阶组件传递属性
```js
//1.在高阶组件 返回值添加 props
<WrappedComponent {...this.state}{...this.props}/>

//2.在写好样式的组件中传入 值
const Position = state => {
   return(
        <div>
            <p>{state.name}</p>
        </div>
    )
}

//3.在挂载组件时 将想显示的参数传入
<CommentACom name={this.state.name}/>
```

# setState()

## 更新数
setState() 为异步更新数据
使用该语法时 后面的setState() 不要依赖于前面的setState()
可以多次调用 setState() 只会触发一次重新渲染


使用setState((state,props)=>{})
参数state: 表示最新的state
参数props: 表示最新的props


第二个参数
场景: 在状态更新(页面完成重新渲染)后立即执行某个操作
语法: setState(updater,[callback])


# JSX语法转换过程
JSX为createElement()方法的语法糖
JSX语法被 @babel/present-react插件编译为createElement()方法
React元素: 是一个对象 用来描述内容


# 组件更新机制
setState() 的两个作用: 1.修改state 2.更新组件(UI)
过程: 父组件重新渲染后 也会重新渲染子组件 只会渲染当前组件子树(当前组件以及所有子组件)


# 组件性能优化
## 减轻state
只储存跟组件渲染相关的数据
不用做渲染的数据不放在state中
对于需要在多个方法中用到的数据 应该放在this中


## 避免不必要的重新渲染
* 组件更新机制: 父组件更新会引起子组件也会更新
* 解决子组件没有任何变化也会重新渲染: 使用钩子函数 shouldComponentUpdate(nextProps,nextState) 
* 作用: 通过返回值决定该组件是否重新渲染 返回true重新渲染 false不渲染
* 触发时机: 更新阶段的钩子函数 组件重新渲染前执行
* 接收参数: nextProps 获取最新的props  nextState 获取最新的state
* 函数中获取父组件中的值为原始值 this.props.属性

```js
//实例:
class A extends Component {
     shouldComponentUpdate(nextProps , nextState){ return true/false }   
}
```

## 纯组件
纯组件(React.PureComponent): 与React.Component功能相似
区别: PureComponent内部自动实现shouldComponentUpdate钩子 , 不需要手动比较
原理: 纯组件内部通过分别 对比 前后两次 props 和 state的值 , 来决定是否重新渲染组件

```js
//实例:
class A extends React.PureComponent{}
```
