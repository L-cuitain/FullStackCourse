# React生命周期

## 挂载时
### Render阶段
constructor 启动时先调用

render更新 :
* New props  新增组件参数
* setState()  设置state值
* forceUpdate() 强制更新组件


### Commit阶段
componentDidMount

### 执行
执行时机:组件创建时(页面加载时)

执行顺序: constructor() --> render() --> componentDidMount

函数作用: 
constructor()函数: 创建组件最先执行  初始化state 为事件处理程序绑定this
render()函数: 每次组件渲染都会触发  作用:渲染UI(不能调用setState)
componentDidMount组件挂载(完成DOM渲染)后 作用: 发送网络请求  DOM操作  



## 更新时
### Render阶段
render更新 :
New props  新增组件参数
setState()  设置state值
forceUpdate() 强制更新组件


### Commit阶段
componentDidUpdate


### 执行
执行时机: setState() forceUpdate() 组件接受新的props

执行顺序: render() --> componentDidUpdate()
子组件比跟组件先执行

函数的作用:
render: 每次组件渲染都会触发  作用:渲染UI(与挂载阶段是同一render)
componentDidUpdate: 组件更新(完成DOM渲染)后  作用: 发送网络请求  DOM操作  (setState()必须放在一个if条件中)



## 卸载时
### Render阶段
无


### Commit阶段
componentWillUnmount

### 执行
执行时机:组件从页面中消失
函数的作用:componentWillUnmount 当组件卸载(从页面中消失) 作用:执行清理工作(清理定时器等)


# render-props和高阶组件

## React组件复用

## render props模式

## children代替render属性