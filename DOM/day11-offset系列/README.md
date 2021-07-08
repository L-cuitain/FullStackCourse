# 今日内容-动画效果

## offset系列

### offsetWidth和offsetHeight

  offsetWidth: 某一个元素的尺寸 宽度+padding+border  不包括margin 不带单位
  offsetHeight: 某一个元素的高度 高度+padding+border 不包括margin 不带单位

  注意: 我们一般不用元素.style.属性名来获取元素的样式 这种方式只能获取行内样式 获取不了样式表或者style标签中的样式

### offsetLeft和offsetTop

  offsetLeft: 找到自身相对于定位父级的left值
  offetTop:找到自身相对于定位父级的top值

  注意:1.如果不存在任何定位的元素，那么就从body计算
      2.不断的去找有定位的父元素 直到找到 找不到 算body是定位父级

### offsetParent

  offsetParent: 获取自己的定位父级

  注意: 1.元素自身如果有fixed属性， offsetParent的值null
        2.body元素的offsetParent为null
        3.如果最近的父级没有定位 那么offsetParent往上找, 找到就返回该父元素，找不到返回body

### 拖动的模态框

#### 需求

  1.点击链接 显示登陆框
  2.点击关闭 隐藏登陆框
  3.拖动登陆框

#### 功能1 点击链接 显示登陆框

  1.获取链接按钮
  2.给链接按钮添加点击事件
  2.1 让登陆框显示
  2.2 让遮盖层显示

#### 功能2 点击关闭 隐藏登陆框

  1.获取关闭按钮
  2.给关闭按钮注册点击事件
  2.1 让登陆框隐藏
  2.2 让遮盖层隐藏

#### 功能3 拖动登陆框
  
  当我们鼠标按下(mousedown)的时候
    获取不变的值--鼠标在元素中相对于元素的坐标
  当我们鼠标在移动(mousemove)的时候
    获取的是鼠标在页面中的坐标 - 不变的量
  当我们鼠标松开(mouseup)的时候 
    解绑mousemove事件

### 京东放大镜

#### 功能1: 当鼠标移入移出 小手机区域 黄色区域和大手机显示 隐藏

  1.获取元素 preiew_img  mask big
  2.给preview_img添加加移入事件
  2.1 黄色区域显示
  2.2 大手机显示
  3.给preview_img添加加移出事件
  3.1 黄色区域隐藏
  3.2 大手机隐藏

#### 功能2: 当鼠标移动的时候 黄色区域跟随鼠标移动

  1.鼠标在preview_imgs区域移动 给preview_img添加mousemove事件
  1.1 获取鼠标在preview_img中的坐标 e.pageX-这个元素的offsetLeft e.pageY-这个元素的offsetTop
  1.2 获得的值赋值给黄色区域的left 和 top
  1.3 解决鼠标总是在黄色区域的左上角
  1.4 解决黄色区域超出preveiw_img的问题
  
#### 功能3: 当鼠标移动的时候 黄色区域移动 大手机图片也移动

    小图的移动距离(maskx,masky)/小图的最大移动距离(100) = 大图的移动距离(未知数x) /大图的最大移动距离(已知)
    小图的移动距离*大图的最大移动距离/小兔的最大移动距离=大图的移动距离

    1.获取大图片
    2.获取大图片的最大移动距离
    3.计算大图的移动距离
    4.赋值
