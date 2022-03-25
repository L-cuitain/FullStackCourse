# Redux-Thunk

## 相关参考
```
https://segmentfault.com/a/1190000037437347
https://www.redux.org.cn/docs/advanced/AsyncActions.html
```

## Redux之间区别
Redux: 核心库 , 功能简单 , 只是一个单纯的状态机

React-Redux: 与React的连接库 , 当Redux状态更新的时候通知React更新组件

Redux-Thunk: 提供Redux的异步解决方案 , 弥补Redux功能的不足


## 作用
Redux-Thunk让dispatch多支持一种 函数 类型
在使用Redux-Thunk前 dispatch 的 action 必须是一个纯对象(plain object)
使用Redux-Thunk后,dispatch可以支持函数 , 这个函数会传入dispatch本身作为参数

```js
// 异步action creator
function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }
}

store.dispatch(incrementAsync());
```


## Thunk引入
```js
//创建store
//applyMiddleware 中间件 可以把一个方法挂到redux
import { createStore , applyMiddleware } from 'redux';
//引入reducers
import reducers from './reducers/reducer';
//引入redux-thunk
import thunkMiddleware from 'redux-thunk';
//将thunkMiddleware挂到 applyMiddleware 并返回
const storeEnhancer = applyMiddleware(thunkMiddleware);

//把reducer链接好的store放到createStore中创建store
const store = createStore(reducers,storeEnhancer);
```


## Thunk中间件
使用Thunk中间件可以处理两件事情:
找到一个'合法'的方法给辅助方法提供dispatch参数
帮助Redux区分哪些是异步action creator

```js
//简单来讲 React Thunk告诉 Redux怎么去区分这种特殊的action---它其实是一个函数
import { create , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

//这个是普通纯对象action
store.dispatch({ type: 'INCREMENT' });

//有了thunk 就可以识别函数了
store.dispatch(function(dispatch){
    //这个函数里又可以dispatch很多action
    dispatch({type: 'INCREMENT'})
    dispatch({type: 'INCREMENT'})
    dispatch({type: 'INCREMENT'})

    setTimeout(() => {
        //异步的dispatch也可以
        dispatch({type: 'INCREMENT'})
    },1000)
})
```

如果你使用这个中间件 而且dispatch是一个函数 React Thunk会自己将dispatch作为参数传进去
你的reducer只会接收到纯对象action,无论是直接发出还是前面那些异步函数发出


## Thunk中间件传参
```js
//可以不需要接收dispatch作为第一个参数 而是返回一个函数来接收dispatch作为第一个参数
function showNotification(id,text){
    return {type: 'SHOW_NOTIFICATION',id,text}
}

let nextNotificationId = 0;
export function showNotification(text){
    return function(dispatch){
        const id = nextNotificationId++;
        dispatch(showNotification(id,text))
    }
}

//组件使用此函数
//不适用写法: showNotification('You just logged in.')(this.props.dispatch)
//只要使用了Redux Thunk , 如果想dispatch一个函数 , 而不是一个纯对象 , 这个中间件会自己帮你调用这个函数 而且会将dispatch作为第一个参数传进去
this.props.dispatch(showNotification('You just logged in.'))
```


## 在Thunk中读取state
```js
//Redux Thunk提供了一个读取当前store state方法 , 除了传入dispatch参数外 , 它还会传入getState作为第二个参数
let nextNotificationId = 0;
export function showNotification(text){
    return function(dispatch,getState){
        //不像普通的action creator 这里可以提前退出
        //Redux不关心这里的返回值 没返回值也没关系
        if(!getState().areNotificationsEnabled){
            return
        }

        const id = nextNotificationId++;
        dispatch(showNotification(id,text))
    }
}

```


## Redux中间件范式
```js
//范式:
function logger(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.info('dispatchiing',action);
            let result = next(action);
            console.log('next state',store.getState());
            console.groupEnd();
            return result;
        }
    }
}
```

要点:
* 一个中间件接收store作为参数 会返回一个函数
* 返回的这个函数接收老的dispatch函数作为参数(也就是代码的next) 会返回一个新的函数
* 返回的新函数就是新的dispatch函数 , 这个函数里面可以拿到外面两层传进来的store和老dispatch函数


## Redux-Thunk源码书写
```js
//初始thunk中间件的结构:
function thunk(store){
    return function(next){
        return function(action){
            //先直接返回结果
            let result = next(action);
            return result;
        }
    }
}


//处理thunk
//thunk是一个函数 接收dispatch  getState两个参数 所以把thunk拿出运行 然后给它传入这两个参数 再将它的返回值直接返回
function thunk(store){
    return function(next){
        return function(action){
            //从store中解构出dispatch , getState
            const { dispatch , getState } = store;
            
            //如果action是函数 将它拿出来运行 参数为 dispatch 和 getState
            if(typeof action === 'function'){
                return action(dispatch,getState);
            }

            //否则按照普通action处理
            let result = next(action);
            return result;
        }
    }
}
```


## 接收额外参数withExtraArgument
```js
//Redux-Thunk还提供一个API , 在使用applyMiddleware引入时 , 可以使用withExtraArgument注入几个自定义参数
const api = "http://www.example.com/sandwiches/";
const whatever = 42;

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument({ api , whatever }))
);

//action.js
function fetchUser(id){
    return (dispatch , getState , {api , whatever}) => {
        //现在可以使用 额外参数 api 和 whatever
    }
}
```


## 具有withExtraArgument的源码实现
```js
//外面再包一层函数 createThunkMiddleware接收额外参数
function createThunkMiddleware(extraArgument){
    return function thunk(store) {
    return function (next) {
      return function (action) {
        const { dispatch, getState } = store;

        if (typeof action === 'function') {
          // 这里执行函数时，传入extraArgument
          return action(dispatch, getState, extraArgument);  
        }

        let result = next(action);
        return result
      }
    }
  }
}
```



# Redux官方源码
```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```