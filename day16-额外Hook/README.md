# React-Hook

## 额外Hook

### 相关参考
```
https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext
https://juejin.cn/post/6844904001998176263
```

### useReducer

通过 hook 提供的 useReducer 来实现React状态管理 是useState的替代方案

```js
//接收参数 reducer函数 , initalState(默认状态值)
const [state , dispatch] = useReducer(reducer,initalState);

return (
    <div className="App">
      <h1>{state.count}</h1> 
      <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
    </div>
  );
```


### useContext

接收一个context对象(React.createContext的返回值)并返回该context的当前值
当组件上层<Mycontext.Provider>更新时 , 该Hook会触发重渲染,并使用最新传递给MyContext provider的context value值
即使祖先使用React.memo 或 shouldComponentUpdate , 也会在组件本身使用 useContext 时重新渲染

```js
const value = useContext(myContext);

//根组件中
//1.通过React.createContext创建新的context对象
const ThemeContext = React.createContext(themes);
//2.通过此对象的Provider 传递 一个通用的value值
<ThemeContext.Provider value={themes.light}>
    <Children />
</ThemeContext.Provider>


//子组件中
//1.通过react的 useContext 传入创建的context对象 来返回此对象的value值
const theme = useContext(ThemeContext);
//在组件中调用value对象的值来显示
return (
    <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
    </button>
)
```


### useCallback

在 a , b 的变量值不变的情况下 , memoizedCallback的引用不变
useCallback的第一个入参函数会被缓存 从而达到渲染性能优化的目的
把内联的回调函数 及 依赖项数组作为参数传入 useCallback

```js
const memoizedCallback = useCallback(
    () => {
        doSomething(a,b)
    },
    [a,b]
)

```

useCallback(fn,deps) 相当于 useMemo(() => fn , deps)


### useMemo

在 a 和 b 的变量值不变的情况下 , memoizedValue的值不变
useMemo函数的第一个入参函数不会被执行 , 从而达到节省计算量的目的
如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值

```js
const memoizedValue = useMemo(
    () => example(a,b),
    [a , b]
    )
```


#### useCallback 与 useMemo的区别

useCallback 是根据依赖(deps)缓存第一个入参的(callback)
useMemo是根据依赖(deps)缓存第一个入参的(callback)执行后的值

```js
//useCallback部分源码
function updateCallback(callback, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  hook.memoizedState = [callback, nextDeps];
  return callback;
}

//useMemo部分源码
function updateMemo(nextCreate, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  const nextValue = nextCreate(); // 🤩
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

```


### useRef

useRef 返回一个可变的 ref 对象 ,其 .current 属性被初始化为传入的参数
返回的 ref 对象在组件的整个生命周期内保持不变

```js
const refContainer = useRef(initalValue);

//给DOM元素绑定
<input type='text' ref={refContainer}/>

//通过 .current 获取DOM元素的事件
refContainer.current.focus();
```


### useImperativeHandle

useImperativeHandle 可以在使用 ref 时自定义暴露给父组件的实例值
应当与 forwardRef 一起使用

```js
useImperativeHandle(ref , createHandle,[deps]);

//父组件
//引入 forwardRef 将 ref属性传递给子组件
import { forwardRef , useRef } from 'react';
//创建 ref
const exampleRef = useRef();
//参数为引入的组件
const ForwardRef = forwardRef(ChildCom);

//通过函数 控制子组件暴露的ref

//挂载组件
return (
  <ForwardRef ref={exampleRef} />
);


//子组件
//引入 useImperativeHandle
import { useRef , useImperativeHandle } from 'react';
//创建新的ref
const newRef = useRef();

//通过 useImperativeHandle 将 ref 进行绑定 通过父组件中的方法可以执行myfocus方法
useImperativeHandle(ref , () => ({
  myfocus: () => {
    newRef.current.focus();
  }
}))

```


### useLayoutEffect

在DOM元素发生变化后 同步 调用Effect 而useEffect则为 异步 调用
执行时机:
挂载或更新组件 useLayoutEffect会比useEffect先执行
卸载组件 useEffect会比useLayoutEffect先执行


useLayoutEffect优点:
通过 同步 执行状态更新可解决一些特定场景下的页面闪烁问题 (例如 异步执行 大量计算)

useLayoutEffect缺点:
同步执行可能会阻塞渲染

```js
useLayoutEffect(() => {},[])
```