# 移动Web

## css扩展语言

### 为什么要学习css扩展语言

### CSS扩展语言

- sass(预处理语言)
  - 2007年 ruby开发的  开始的时候名字叫sass 采用的是缩进式语法 后续进行了更新 采用了css的花括号的语法 名字scss  (LibSass c++开发的  node-sass)

- less(预处理语言)

- stylus(预处理语言)

- postcss(后处理语言)  -- 专门来补充兼容性代码的处理器

### sass的编译

- 1.vscode实时编译插件 Live Sass Compiler

- 2.在vscode的状态栏右下角有一个watch sass 点一下就自动编译了

### 注释

- 静默注释:不会被编译到css中 静默注释是给开发者看的

- 注释 /**/ 多行注释 css中的注释 会被编译到css文件中 

### 变量

- 语法: $变量名: 变量值; ` 提示: 变量名希望使用小驼峰命名法 `

- 作用: 方便设计修改设计方案 让前端修改页面的配色方案

```scss

$white: #f5f5f5;
$normalBorder: 1px solid #ff0000;
$blockCenter: 0 auto;

```
### 嵌套

- 作用: 减少代码 增加代码的层次关系

```scss
.flash-title-button  {
  float: right;
   margin-top:  calc((62px - 24px) / 2);
   width: 71px; 
   height: 24px;
   border: 1px solid #e0e0e0;
   box-sizing: border-box;

   a {
    float: left;
    width: 34px;
    height: 22px;
    text-align: center;
   }

   a:first-child {
     border-right: $normalBorder;
   }

   i {
     line-height: 22px;
     font-size: 16px;
     color: #b0b2ba
   }

   a:hover i {
     color: #fe7000;
   }
}

```

### 父级选择器 &
 
- 这个东西能解决什么问题 这个东西用在哪

- 这个东西是什么

- 这个东西怎么用

- 这个东西用的时候有啥注意点

- 实验一下

### 群组选择器

```scss
// .container h1, .container h2, .container h3 { margin-bottom: .8em }

.container {
  h1,h2,h3 {
    margin-bottom: 20px;
  }
}
```

### 子组合选择器和同层组合选择器：>、+和~;

- `>` 代表 直接子代选择器
- `+` 代表 某个元素（除了自己）后面的一个兄弟元素
- `~` 代表 某个元素（除了自己）后面的所有兄弟元素


### 导入Sass文件

- 没有下划线的会被编译 有下划线的不会被编译的
- 语法: @import "sass的文件名"


### 混合器(mixins)

- 作用: 混合器像函数一样 封装的是一段具有具体功能的代码 在需要的时候调用

- 定义: @mixin 混合器的名字(形参:默认值,...) { 具体某个功能的代码 }

- 调用: 选择器 { @include 混合器的名字(实参) }

### 继承

- 作用: 就是减少写代码的另外一种方式 继承用的好 可以大量的减少代码

- 语法:  @extend 选择器的名字

- 注意: 继承是一把双刃剑 用的好 可以极大的减少代码 用的不好 会出现冗余代码

### 私有前缀


```css
div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

- 为什么要有私有前缀

  css是不断开发的 css3是2008发布的css3 没有以后了 h5 c3

  五家: ie: -ms-   火狐: moz   google: blink是webkit的一个分支  苹果: -webkit-

  display: flex

  display: -webkit-box;  50 51 64 70
  display:  -ms-flexbox;

  私有前缀: -ms- 微软  -moz- 火狐  -webkit- chrome和苹果  私有前缀是工具帮你加好
 
  查看新特性支持情况的网站 https://caniuse.com/

### sass中的@import 和 css中的@import 有什么区别

- sass是开发时使用   先编译 后上线使用 压根儿就不存在多个css引用的问题 只是在编译过程中需要点时间 但是上线之后丝毫不影响用户体验 所以推荐用 @import在sass中没有兼容性
- css是上线之后网页加载需要样式的时候下载 如果在css中使用@import 会让css下载两次以上 会让网页渲染变慢 所以是无用功 不用 @import有兼容性 