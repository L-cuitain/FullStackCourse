## 定位

### static 静态定位
  不需要写，这是元素的默认定位方式，含义是:无定位 布局使用标准流布局

### relative 相对定位

  相对于自己的定位
  相对定位元素以前的位置 也不能被占用
  ` 计算机中的坐标系和数学中的坐标系是不一样的，X轴是一样的 都是水平向右为正， Y轴是不一样的 计算机中Y轴是垂直向下为正`
  应用: 1.鼠标移入 让自己发生变化
        2.给绝对定位元素当爹的

### absolute 绝对定位

  **position: absolute**

  `口诀: 子绝父相  子元素绝对定位的时候 父级元素要相对定位  注意口诀只是为了让大家先学会一些基本的东西 但是实际上 父级只要有除了static之外的定位都可以`

  绝对定位可以提高元素的层级(z-index)

### fixed 固定定位

  固定定位就是元素相对于可视区的定位 可视区一般是不变的但是随着浏览器的大小 可视区绝对会变
### z-index 层级 叠放次序

  z-index必须配合定位使用  


### 已知宽高的元素水平垂直居中

  让子元素的left为50%  top为50%  让子元素的margin-left为-自身宽度的一半  让子元素的margin-top为-自身的高度的一半


## 元素的显示和隐藏

- display: block | inline | inline-block | none | table(清除浮动的时候)

- visibility: hidden | visible

- overflow: visible(不做任何操作) | hidden(超出部分隐藏) | scroll(强制显示滚动条) | auto(超出显示滚动条 不超出不显示)


## 精灵图

### 为什么要用精灵图

减少服务器与浏览器的请求次数和响应次数 降低服务器的压力 提高网页加载速度

### 精灵图是设计师给我们的

### 精灵图的使用
```css
/* 1.引入精灵图 */
      /* background-image: url(./image/sprite.png);
      2.设置平铺方式 一般向水平方向重复就用repeat-x 否则 repeat-y
      background-repeat: no-repeat;
      3.用量取工具量出图片左上角点的位置 写的时候 值写成负数
      background-position: 0px -377px; */
```
