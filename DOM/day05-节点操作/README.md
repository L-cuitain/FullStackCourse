# WebAPI

## 节点操作

 为什么要进行节点操作
   eg: document.getElementById  
   前面的获取节点(元素)的方法是对它自己进行获取 如果不知道这个元素的id 标签名 选择器
   通过关系来操作元素

### 节点概述

#### 节点的概念

    节点: 在网页中(除了<!DOCTYPE html>)任何内容都是节点

    1.元素节点 其实就是标签
    2.属性节点 其实就是标签中的属性
    3.文本节点 其实就是文本
    4.注释节点 其实就是注释

#### 节点的三个属性

    1.文本节点  节点类型: 3  节点名称: #text  节点的值: 文本的内容
    2.(记住)标签节点  节点类型: 1  节点名称: 标签的名字 节点的值: null
    3.注释节点  节点类型: 8  节点名称:  #comment 节点的值: 注释内容

### 节点创建

#### 方法1: 元素.innerHTML

  语法: 元素.innerHTML =`元素`
  特点: 可以在任何元素中添加节点
        包括创建和插入节点
        插入节点会把元素的内容清空

#### 方法2: document.write()

  语法: document.write()
  特点: 只能在body中插入元素
       包括来创建和插入节点
       插入body中会把body的内容清空

#### 方法3: document.createElement()

  语法: let 元素对象 = document.createElement()
  参数: 标签名
  返回值: 创建的元素对象(只会把元素创建出来放在内存中)
  注意: 只能创建元素 不能插入元素

### 节点插入

#### 父元素.appendChild()

  功能: 把元素插入到父元素内部的最后
  参数: 新创建的元素对象(节点)
  返回值: 添加进去的元素

#### 父元素.insertBefore(newChild,refChild)

  功能: 把元素插入到父元素内部的某个元素的前面
  参数: 要插入的新元素,基准元素
  返回值: 插入失败false 成功的返回那个元素

### 节点删除

 功能: 通过父节点删除子节点
 语法: 父元素.removeChild(子节点)
 参数: 子节点
 返回: 被删除掉的那个元素对象

### 节点查找

#### 查找父节点

  方法1: 元素.parentElement
  方法2: 元素.parentNode(推荐用这个 因为节点包括元素)

#### 查找子节点

##### 查找所有子节点

  方法1: 元素.childNodes  获取元素的所有节点
  方法2: 元素.children   获取元素节点(推荐用这个)

##### 查找第一个子节点

  方法1: 元素.firstChild          获取所有节点
  方法2: 元素.firstElementChild   (获取元素节点)
  方法3: 元素.children[0]         (推荐)

##### 查找最后一个子节点

  方法1: 元素.lastChild           获取所有节点
  方法2: 元素.lastElementChild   (获取元素节点)
  方法3: 元素.children[元素.children.length-1] (推荐使用)

#### 查找兄弟节点

##### 查找上一个兄弟节点

方法1: 元素.previousElementSibling(推荐)
方法2: 元素.previouSibing

##### 查找下一个兄弟节点

方法1: 元素.nextElementSibling(推荐)
方法2: 元素.nextSibling;

### 节点替换

方法: 父元素.replaceChild(新元素,旧元素);
参数: 新元素 旧元素

### 节点复制

方法: 自身元素.cloneNode()
参数: true代表深拷贝 false代表浅拷贝 注意⚠️:false可以不写

andrewfxh@gmail.com
Opt1lrd4ABNeEPoc
