# CSS in JS

## styled-component

### 安装
```bash
npm install --save styled-components
```

### 基础格式
```js
//引入styled-components
import styled from 'styled-components'

//创建一个 组件 渲染一个具有样式的标签
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

//在类中的 render 将 带有样式的标签组件返回
class AClass extends React.Component{
    render(){
        return (
            <Button />
        )
    }
}
```


### 基于属性适配
```js
//将 props 以插值的方式传递给 styled component
const Div = Styled.div`
    width: 200px;
    height: 200px;
    color: ${props => console.log(props)}
`

class AClass extends React.Component{
    render(){
        return (
            <Div color={'red'}></Button>
        )
    }
}
```

### 样式继承
```js
//使用构造函数styled()包裹被继承的组件
//原组件
const Div = Styled.div`
    width: 500px;
    height: 200px;
`

//新组件
const ODiv = Styled(Div)`
    background-color: red
`;
```

# React动画

## 原生过渡动画

## 动画组件
http://reactcommunity.org/react-transition-group/transition


## 使用 CSSTransition 完成显示动画 
安装 react-transition-group

```bash
npm install react-transition-group --save
yarn add react-transition-group
```

```js
// 引入 CSSTransition
import { CSSTransition } from 'react-transition-group';
```


编写对应CSS动画
CSSTransition有三个状态:
* in(boolean): 如果取值为false 表示触发退出动画 , 如果取值为 true 表示触发进入动画
* classNames: 指定动画类名的前缀
* timeout : 设置动画超时时间


## 使用CSS写动画
```css
/* xxx: classNames添加的类名 */

.xxx-enter{
    /* 进入动画执行之前绑定的类名 */
}

.xxx-enter-active{
    /* 进入动画执行过程中绑定的类名 */
}

.xxx-enter-done{
    /* 进入动画执行完毕之后绑定的类名 */
}

.xxx-exit{
    /* 退出动画执行之前绑定的类名 */
}

.xxx-exit-active{
    /* 退出动画执行过程中绑定的类名 */
}

.xxx-exit-done{
    /* 退出动画执行完毕之后绑定的类名 */
}

.xxx-appear{
    /* 初始化动画执行之前绑定的类名 */
}

.xxx-appear-active{
    /* 初始化动画执行过程中绑定的类名 */
}

.xxx-appear-done{
    /* 初始化动画执行完毕后绑定的类名 */
}

```

## CSSTransition 生命周期方法
onEnter / onEntering / onEntered

onExit / onExiting / onExited


## SwitchTransition
SwitchTransition可以完成组件切换动画

SwitchTransition 主要有一个属性: mode 有两个值
in-out: 表示新组件先进入 旧组件再移除
out-in: 表示旧组件先移除 新组件再进入

SwitchTransition 里面要有 CSSTransition或Transition组件
SwitchTransition 里面的CSSTransition或Transition不再接收in属性 取而代之的是key属性


## TransitionGroup
TransitionGroup完成列表改变动画






