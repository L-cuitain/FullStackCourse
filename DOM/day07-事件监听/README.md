# 今日内容

## 事件监听

### 为什么要学习事件监听

  前面学习的on+事件类型绑定事件的方式 不能给一个元素添加多个相同事件，即使加上也不能用的问题

### 使用事件监听注册事件的方法(绑定事件)

#### 方法1: 传统方法

  语法: 事件源.on+事件类型 = function (){}
  注意: 只能给元素添加不同的事件 如果是相同的事件那么会被覆盖

#### 方法2: ie9以上浏览器注册事件的方法

  语法: 事件源.addEventListener(事件类型, 事件处理程序, 是否冒泡[可选的])
  说明: add添加 Event事件 listener监听器  给元素添加事件监听器
  注意: 这个方法可以添加相同类型的事件多个 
        这个方法可以控制事件是冒泡还是捕获
  是否冒泡: 如果不写 为false(冒泡) 如果写true true代表捕获

#### 方法3: ie9及以下浏览器注册事件的方法

  语法: 事件源.attachEvent('on+事件类型', 事件处理程序);
  注意: 事件类型务必带on


### 使用事件监听移除事件的方法(解绑事件)

#### 方法1: 传统方法移除

  语法: 事件源.on+事件类型 = null;
  注意: 理解为把function给覆盖掉了 变成 null

#### 方法2: ie9以上浏览器移除事件的方法

  语法: 事件源.removeEventListener(事件类型,事件处理函数(名字))
  说明: remove移除 Event事件 Listener监听器
  注意: 事件处理函数 得写名字

#### 方法3: ie9及以下浏览器注册事件的方法

  语法: 事件源.detachEvent('on+事件类型', 事件处理程序(名字));
  注意: 事件类型务必带on


### 兼容写法

```js
   function removeEventListener(element, eventName, fn) {
      // 1.浏览器是否支持removeEventListener
      if (element.removeEventListener) {
        element.removeEventListener(eventName, fn)
      } else if (element.detachEvent) {   // 2.浏览器是否支持detachEvent
        element.detachEvent('on' + eventName, fn);
      } else {
        // 3.没办法 必须支持这个
        // 对象.属性
        // 对象[属性]
        element['on' + eventName] = null;
      }
    }
```

## 事件流

### 什么是事件流

  所谓的事件流就是描述从页面中接收事件的顺序
  事件的发生是有顺序的，这个就是DOM事件流|


### 事件流的三个阶段

  第一阶段: 捕获阶段
  第二阶段: 目标阶段
  第三阶段: 冒泡阶段

### 注意点
  1.在js执行过程中，只能执行冒泡或者捕获的其中一个(网景  微软  为了让js执行出现最大的兼容 既有捕获又有冒泡 )
  2.xxx.onclick 和attachEvent只有冒泡没有捕获
  3.不是所有的事件都有冒泡和捕获，有些事件没有冒泡 onblur onfocus onmouseenter onmouseleave
  4.冒泡也不全是问题 有些工作还需要冒泡来做(事件委托)
