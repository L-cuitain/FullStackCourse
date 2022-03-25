# Generator函数

## 概念

Generator函数是ES6提供的一种异步编程解决方案

执行Generator函数会返回一个遍历器对象,返回的遍历器对象,可以依次遍历Generator函数内部的每一个状态

Generator函数两个特征:
* function关键字与函数名之间有一个星号
* 函数体内部使用yield表达式,定义不同的内部状态

```js
function* helloGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hg = helloGenerator();

hg.next();
//{ value: 'hello' , done: false }
hg.next();
//{ value: 'world' , done: false }
hg.next();
//{ value: 'ending' , done: true }
hg.next();
//{ value: undefined . done: false }

```
调用Generator函数 , 返回一个遍历器对象 , 代表 Generator 函数的内部指针,以后,每次调用遍历器对象的 next 方法,就会返回一个有着 value 和 done 两个属性的对象 , value属性表示当前的内部状态的值 , 是 yield表达式后面那个表达式的值 , done属性是一个布尔值 , 表示是否遍历结束


## yield表达式

遍历器对象的 next 方法运行逻辑如下:
* 遇到yield表达式 , 就暂停执行后面的操作 , 并将紧跟yield后面的那个表达式的值 , 作为返回的对象的value属性值
* 下一次调用next方法时 , 再继续往下执行 , 直到遇到下一个yield表达式
* 如果没有再遇到新的yield表达式 , 就一直运行到函数结束 , 直到return语句
* 如果该函数没有return语句 , 则返回对象的value属性值为undefined

```js
//yield表达式后面的表达式 只有当调用next方法 内部指针指向该语句时才会执行 
function* gen(){
    yield 123+142;
}
```


# redux-saga

## 相关参考
```
https://redux-saga-in-chinese.js.org/
```


## 安装
```
npm install --save redux-saga

yarn add redux-saga
```


## 介绍
```
redux-saga是一个解决异步操作的库
redux-saga相当于在Redux原有数据流多一层 对Action进行监听 捕获到监听的Action后可以派生一个新的任务对state进行维护

                   ---------       -------------------------------------           -------------
                  |  sagas  |-----|  当前action是否属于sagas监听的action  |----是-->|  派生新任务  |
                   ---------       -------------------------------------           -------------
                       |                                                                 |
                      监听                                                                |
                       |                                                                 |
                       |                                                                 |
                       ⬇                                                                 |
 --------         ----------            ---------                                        |
|  View  | ----->|  Action  | -------->|  State  | <-------------------------------------
 --------         ----------            ---------
    ⬆                                       |
    |                                       |
    |                                       |
     ---------------------------------------
```

## redux-saga和redux-thunk的区别
* Sagas是通过 Generator 函数来创建的 , 意味着可以用同步的方式写异步的代码
* Thunks是在 action 被创建时才调用的 , Sagas 在应用启动时就开始调用 , 监听action并做相应的处理 (通过创建 Sagas 将所有的异步操作逻辑收集在一个地方集中处理)
* 启动的任务可以在任何时候通过手动取消 , 也可以把任务和其他 Effects 放到 race 方法里可以自动取消


## 创建Saga
```js
//将中间件 与 Redux store建立连接
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

```


## 使用saga
```js
// saga.js
import { takeEvery , takeLatest , put } from 'redux-saga/effects';

//参数:
// takeEvery(pattern,saga): 在发起(dispatch)到Store并且匹配 pattern 的每一个action 上派生一个 saga
function* watchFetchUser() {
  yield takeEvery('USER_REQUESTED', fetchUser)
}
// takeLatest(pattern,saga): 在发起 Store 并且匹配 pattern 的每一个 action 上派生一个 saga , 并自动取消之前所有已经启动但仍在执行中的 saga 任务
// 每当一个 action 被发起到 Store，并且匹配 pattern 时，则 takeLatest 将会在后台启动一个新的 saga 任务 如果此前已经有一个 saga 任务启动了（在当前 action 之前发起的最后一个 action），并且仍在执行中，那么这个任务将被取消 
// put(action): 用来命令 middleware 向 Store 发起一个 action


function* fetch(){
    // ...获取数据
}

export default function* saga(){
    //使用 takeEvery/takeLatest 判断action类型 并进行拦截
    yield takeEvery('USER_REQUESTED', fetchUser);
}
```