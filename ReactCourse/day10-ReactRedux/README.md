# React Redux

## 相关参考
```
https://www.redux.org.cn/
```

## 安装
```
安装redux包
npm install --save redux

模板下载
npx create-react-app my-app --template redux
```

## 为什么要学习Redux
* React和Vue区别之一: Vue是双向 React是单向
* React是一个用于构建用户界面的JavaScript库 , 并不是Web应用的完整解决方案
* 当应用程序复杂时 如果想很好的管理 , 维护 , 追踪 , 控制状态(数据)时 需要使用Redux(类似Vuex)


## Redux是什么
Redux是JavaScript状态容器 提供可预测化的状态管理

设计思想:
* Web应用是一个状态机 , 视图与状态一一对应
* 所有状态 保存在一个对象里


## 可预测状态管理
数据在什么时候 因为什么 发生了什么变化 都是可以控制和追踪的 称为预测的状态管理


## Redux的应用场景
* 某个组件的状态 需要共享
* 某个状态需要在任何地方都可以拿到
* 一个组件需要改变全局状态
* 一个组件需要改变另一个组件的状态


## Redux核心理念
* 通过store保存数据
* 通过action来修改数据
* 通过reducer将store和action串联 reducer(state=initialState){}

```
                      -------------
          --------->  | Component |  ---------
         |            -------------           |
         |                                    ⬇
  -------------       -------------       -------------
  |   Store   | <---- |  Reducer  | <---- |  Action   |
  -------------       -------------       -------------

```

## Redux三大原则

### 单一数据源
* 整个应用程序的state只能储存在一个store中
* Redux并没有强制不能创建多个Store , 但那样做并不利于数据的维护
* 单一的数据源可以让整个应用程序的state变得方便维护 , 追踪 , 修改


### State是只读的
* 唯一修改State的方法一定是触发action
* 确保视频或网络请求都不能直接修改State
* 保证所有的修改都被集中化处理 , 并按照严格的顺序执行


### 使用纯函数来执行修改

#### 纯函数
如果函数的调用参数相同 , 则永远返回相同的结果
该函数不会产生任何可观察的副作用 , 例如网络请求 输入和输出设备或数据突变

```js
//示例
//纯函数:
function priceAfterTax(productPrice) { return (productPrice * 0.20) + productPrice;}

//非纯函数:
var tax = 20;
function calculateTax(productPrice) {
    return (productPrice * (tax/100)) + productPrice;
}
```


#### 什么是可观察的副作用
一个可以被观察的副作用是在函数内部与其外部的任意交互 , 这可能是在函数内修改外部的变量 , 或在函数里调用另外一个函数等


## Redux基础

### Store
Store是将action和reducers联系到一起的对象 实现创建store并将reducer绑定
Redux应用只有一个单一的store

方法:
* getState() 获取state
* dispatch(action) 更新state
* subscribe(listener) 注册监听器
* subscribe(listener) 返回的函数注销监听器
```js
import { createStore } from 'redux';
import todoApp from './reducers';
let store = createStore(todoApp)
```


### Action
更新Store的状态仅有一种方式: 调用dispatch函数 , 传递一个action给这个函数
reducer通过判断传递的action来执行相应的操作
一个Action就是一个简单的JavaScript对象

```js
export const addAction = () => {
    return {
        type: { type: 'ADD_TODO', text: 'asdf' }
    }
}
```

### Reducer
reducer是一个普通的JavaScript函数 , 它接收两个参数: state和action , 前者为Store中储存的JavaScript对象状态树 , 后者为组件中dispatch的Action
reducer根据action的指示 , 对state进行对应的操作 , 然后返回操作后的state , Redux Store 会自动保存这份新的state

```js
reducer(state,action){
    switch(action.type){
        case 'type':
            // 对 state 进行操作
            return newState;
        default:
            return state;    
    }
    
}
```

