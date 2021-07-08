# Less

## Less使用方法

### 1.在页面引入Less.js
- 导入less.js文件 创建s
- (link标签一定要在Less.js之前引入,并且link标签的rel属性要设置为stylesheet/less)
- <link rel="stylesheet/less" href="style.less">
- <script src = "less.min.js"></script>


### 2.在命令行 使用npm安装
- npm install -g less

- 具体使用命令

- $ lessc styles.less > styles.css

## Less功能特性

### 1.变量

#### 1.1 值变量

- 以@开头 定义变量 , 并且使用时直接键入 @ 名称
- 格式:@属性名:属性值

```less


/* Less */
@color: #fff;

header{
    color: @color;
}

/* 生成的CSS */
header{
    color: #fff;
}


```

- 平时 可以把常用的变量 封装到一个文件中 利于代码的维护

#### 1.2 选择器变量

- 让 选择器 变成 动态

```less
/* Less */
@mySelector: #wrap;
@Wrap: wrap;
@{mySelector}{
    // 变量名 必须使用大括号包裹
    color:#999;
    width: 50%;
}

.@{Wrap}{
    color: #ccc;
}

#@{Wrap}{
    color: #666;
}

/* 生成的CSS */
#wrap{
    color: #999;
    width: 50%;
}

.wrap{
    color: #ccc;
}

#wrap{
    color: #666;
}


```

#### 1.3 属性变量

- 可减少代码书写量

```less


/* Less */
@borderStyle: border-style;
@soild:solid;

#wrap{
    @{borderStyle}: @Soild; //变量名 必须使用大括号包裹
}

/* 生成的 CSS */
#wrap{
    border-style:solid;
}


```

#### 1.4 url变量

- 项目结构改变时 , 修改其变量即可

```less

/* Less */
@images: "../img" //加引号
body {
    background: url("@{images}/1.png"); //变量名 用大括号包裹
}


/* 生成的 CSS */
body{
    background: url("../img/1.png");
}

```

#### 1.5 声明变量

- 结构: @变量名:{属性:值}
- 使用: @name();

```less

/* Less */
@background: {background: red;};
#main{
    @background();
}

/* 生成的 CSS */
#main{
    background: red;
}


```

#### 1.6 变量运算

- 加减法时 以第一个数据的单位为基准
- 乘除法时 注意单位统一


```less


/* Less */
@width: 300px;
@color: #222;

#wrap{
    width:@width-20;
    height:@width-20*5;
    color: @color*2;
}


/* 生成的 CSS */
#wrap{
    width:280px;
    height:200px;
    color: #444;
}

```

#### 1.7 变量作用域

- 就近原则

```less


/* Less */
@var: @a;
@a: 100%;
#wrap{
    width: @var;
    @a: 9%;
}


/* 生成的 CSS */
#wrap{
    width: 9%;
}

```


#### 1.8 用变量定义变量

```less


/* Less */
@fnord: "I am fnord";
@var: "fnord";
#wrap::after{
    content: @@var;  //将var替换为其值 content:@fnord;
}


/* 生成的 CSS */
#wrap::after {
    content: "I am fnord";
}


```


### 2.嵌套

#### 2.1 &的使用

- &: 代表上一层选择器的名字

```less


/* Less */
#header{
    &:after{
        content: "this is sibada";
    }
}


/* 生成的 CSS */
#header::after {
    content: "this is sibada";
}


```

#### 2.2 定义私有样式

- 可以借助less在元素中 , 去定义自己的私有样式

```less


/* Less */
#header{
    &.show{
        display: block;
    }
}


/* 生成的 CSS */
#header.show{
    display: block;
}


```


### 3.混合方法

#### 3.1 无参数方法

- 使用时 直接键入名称
- . 与 # 皆可作为方法前缀

```less


/* Less */
.card {  //等价于  .card()
    background: #f6f6f6;
}

#wrap{
    .card;  //等价于  .card()
}


/* 生成的 CSS */
#wrap{
    background: #f6f6f6;
}


```


#### 3.2 默认参数方法

- less可以使用默认参数 如果没有传参数 那么将使用默认参数
- @arguments 指全部参数
- 传的参数中 必须带着单位

```less


/* Less */
.border(@a:10px,@b:50px,@c:30px,@color:#000) {  //等价于  .card()
    border:solid 1px @color;
    box-shadow: @arguments;//指代的是 全部参数
}

#main{
    .border(0px,5px,30px,red);//必须带着单位
}


/* 生成的 CSS */
#main{
    border:solid 1px red;
    box-shadow:0px,5px,30px,red;
}


```


#### 3.3 方法命名空间

- 让方法更加规范

```less


/* Less */
.border(@a:10px,@b:50px,@c:30px,@color:#000) {  //等价于  .card()
    border:solid 1px @color;
    box-shadow: @arguments;//指代的是 全部参数
}

#main{
    .border(0px,5px,30px,red);//必须带着单位
}


/* 生成的 CSS */
#card(){
    background: #723232;
    .d(@w: 300px){
        width: @w;
        
        #a(@h:300px){
            height: @h;  //可以使用上一层传进来的方法
        }
    }
}


```

#### 3.4 数量不定的参数

- 如果方法要接受数量不确定的参数 可以使用...



```less


/* Less */
.boxShadow(...){
    box-shadow: @arguments;
}

#main{
    .boxShadow(1px,4px,30px,red);
}


/* 生成的 CSS */
#main{
    .box-shadow: 1px,4px,30px,red;
}


```


#### 3.5 方法使用important

- 在方法名后 加上关键字即可

```less


/* Less */
.border{
    border: solid 1px red;
    margin: 50px;
}
#main{
    .border() !important;
}


/* 生成的 CSS */
#main{
     border: solid 1px red;     !important
    margin: 50px;       !important
}


```


### 4.继承

- extend 是 Less 的一个伪类  它可继承 所匹配声明中的全部样式

#### 4.1 extend 关键字的使用


```less


/* Less */
.animation{
    transition: all 0.3s;
    .hide{
        transform:scale(0);
    }
}


#main{
    &:extend(.animation .hide);
}


/* 生成的 CSS */
.animation,#main{
    transition: all 0.3s;
    transform:scale(0);
}


```


#### 4.2 all全局搜索替换

- 使用选择器匹配到的 全部声明


```less


/* Less */
#main{
    width: 200px;
}

#main{
    &:after{
        content: "Less is good";
    }
}

#wrap: extend(#main all){}


/* 生成的 CSS */
#main,#wrap{
    width: 200px;
}

#main:after,#wrap:after{
    content: "Less is good";
}


```


#### 4.3 减少代码重复性

- 从表面看 extend 与 方法 最大的差别 为 extend是同个选择器共用同一个声明 而方法 是使用自己的声明 这无疑增加了代码的重复性


```less


/* Less */
#Method{
    width: 200px;
    &:after{
        content: "Less is good";
    }
}

#main{
  .Method;
}


/* 生成的 CSS */
#main{
  width: 200px;
  &:after{
    content:"Less is good!";
  }  
}


```


### 5.导入

#### 5.1 导入less文件 可省略后缀

import "main"; 
//等价于
import "main.less";


#### 5.2 @import 的位置可随意放置

#main{
  font-size:15px;
}
@import "style";


### 6.函数

#### 6.1 判断类型

##### 6.1.1 isnumber
 
 - 判断给定的值 是否 是一个数字

isnumber(#ff0);     // false
isnumber(blue);     // false
isnumber("string"); // false
isnumber(1234);     // true
isnumber(56px);     // true
isnumber(7.8%);     // true
isnumber(keyword);  // false
isnumber(url(...)); // false


##### 6.1.2 iscolor

- 判断给定的值 是否 是一个颜色

##### 6.1.3 isurl

-判断给定的值 是否 是一个 url



#### 6.2 颜色操作


##### 6.2.1 saturate

- 增加一定数值的颜色饱和度

##### 6.2.2 lighten

- 增加一定数值的颜色亮度

##### 6.2.3 darken

- 降低一定数值的颜色亮度


##### 6.2.4 fade

- 给颜色设定一定数值的透明度

##### 6.2.5 mix

- 根据比例混合两种颜色


#### 6.3 数学函数

##### 6.3.1 ceil

- 向下取整

##### 6.3.2 floor

- 向下取整

##### 6.3.3 percentage

- 将浮点数转换为百分比字符串

##### 6.3.4 round

- 四舍五入

##### 6.3.5 sqrt

- 计算一个数的平方根

##### 6.3.6 abs

- 计算数字的绝对值，原样保持单位

##### 6.3.7 pow

- 计算一个数的乘方


### 7.其他

#### 7.1 注释

/* */ CSS原生注释 会被编译在CSS文件中
/ / Less 提供的注释 , 不会被编译在CSS文件中


#### 7.2 避免编译

```less


/* Less */
#main{
    width:~'calc(300px-30px);
}

/* 生成后的CSS */
#main{
    width:calc(300px-30px);
}

```



