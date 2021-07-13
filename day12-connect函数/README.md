# React-Redux

## 相关参考
```
https://www.redux.org.cn/docs/react-redux/api.html
```

## Provider

<Provider store> 使组件层级中 connect() 方法都能够获得 Redux store
正常情况下 根组件应该嵌套在<Provider>中才能使用 connect() 方法

```js
//React
ReactDOM.render(
  <Provider store={store}>
    <MyRootComponent />
  </Provider>,
  document.getElementById('root')
)

//React Router
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
```

## connect()

连接 React 组件与 Redux store
连接操作不会改变原来的组件类 反而返回一个新的已与 Redux store连接的组件类
```js
export default connect(state => state)(TodoApp)
```


### mapStateToProps
connect参数 mapStateToProps
[mapStateToProps(state,[ownProps]): stateProps ](Function)
定义该参数后 , 组件将监听Redux store的变化
只要 Redux store 发生改变 mapStateToProps函数就会被调用
该回调函数必须返回一个纯对象 , 这个对象会与组件的props合并
如果指定了该回调函数中的第二个参数 ownProps , 则该参数的值谓传递到组件的props,而且只要组件接收到新的props , mapStateToProps 也会被调用

```js
function mapStateToProps(state){
    return {gobalState: state}
}

export default connect(mapStateToProps)(TodoApp)
```


### mapDispatchToProps
connect参数 mapDispatchToProps
[mapDispatchToProps(dispatch,[ownProps]): dispatchProps](Object or Function)
如果传递是一个对象,那么每个定义在该对象的函数都将被当作 Redux action creator 对象所定义的方法名将作为属性名
每个方法将返回一个新的函数 , 函数中 dispatch 方法会将 action creator 的返回值作为参数执行
这些属性会被合并到组件的props中

```js
import { addTodo } from './actionCreators';

function mapDispatchToProps(dispatch){
    return {
        handleAdd(){
            dispatch(addAction())
        }
    }
}
```

### mergeProps
connect参数 mergeProps
[mergeProps(stateProps,dispatchProps,ownProps):props](Function)
如果指定了这个参数 , mapStateToProps() 与 mapDispatchToProps() 的执行结果和组件自身的 props 将传入到这个回调函数中
该回调函数返回的对象作为 props 传递到被包装的组件中
如果省略这个参数 默认情况下返回 Object.assign({} , ownProps , stateProps , dispatchProps)


### options
connect参数 options
[options](Object) 如果指定这个参数 可以定制connector的行为
[pure = true](Boolean): 如果为 true , connector将执行 shouldComponentUpdate 并且浅对比mergeProps的结果 , 避免不必要的更新 , 前提是当前组件是一个"纯"组件,它不依赖于任何的输入或state而只依赖于 props 和 Redux store 的state 默认值为true
[withRef = false](Boolean): 如果为true , connector会保存一个对被包装组件实例的引用 , 该引用通过 getWrappedInstance() 方法获得 , 默认值为false


### 返回值
返回一个注入了 state 和 action creator 的 React 组件


## connect封装
