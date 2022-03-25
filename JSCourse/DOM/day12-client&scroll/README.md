# WebAPI-动画效果

## client系列

### clientLeft 和 clientTop

  clientLeft: 左边框的宽度
  clientTop: 上边框的宽度

### clientWidth 和clientHeight

  clientWidth: 获取的是元素不包括边框的宽度
  clientHeight: 获取的是元素不包括边框的高度

## scroll系列

### scrollWidth 和 scrollHeight

  scrollHeight: 获取指定标签内内容的真实高度
  scrollWidth: 获取指定标签内内容的真实宽度

### scrollLeft 和 scrollTop

  scrollTop: 被卷去的高度  卷曲
  scrollLeft: 比卷去的宽度

## 案例:回到顶部

### 需求

1.根据滚动条的位置控制 返回顶部显示和隐藏
2.点击返回顶部这个按钮 滚动条到最顶部

### 功能一

```js

 // 功能1: 当滚动条到一定位置 让返回顶部显示 否则隐藏

    // 1.获取返回顶部按钮
    let linkBtn = document.querySelector('a');
    // 2.给window添加滚动条 滚动事件(scroll)
    // window.onscroll = function (){}
    window.addEventListener('scroll', function () {
      // 2.1 获取页面的卷曲的高度(html的scrollTop body的scrollTop)
      // window.pageYOffset IE9以上 
      let pageScroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      // console.log(pageScroll);
      // 2.2 判断页面跑出浏览器顶部的高度 是不是大于500 
      if (pageScroll >= 500) {
        // 2.2.1 如果大于500 让返回顶部按钮 显示
        linkBtn.style.display = "block";

      } else {
        // 2.2.2 如果不大于500 让返回按钮  隐藏
        linkBtn.style.display = "none";
      }
    })
```

### 功能2:

```js
// 功能2:
    // 点击a标签
    linkBtn.onclick = function () {
      // 让浏览器的滚动条的位置为0 也就是卷曲出去的距离为0
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
```

## 案例:固定导航

### 需求

  当滚动条滚动到 今日团 这个 导航 的位置的时候 让今日图 这个导航从别的定位变成固定定位 

### 思路

  1.获取元素 box2  是今日团
  2.给window添加一个滚动事件(scroll)
  3.获取页面卷曲的距离(页面跑出去多高)
  4.获取box2距离顶部的高度
  5.对比看看页面跑出去的高度 是不是>=box2距离顶部的高度  如果是这样的 那么就让box2固定
  6.如果不是这样 那就 不让它固定

### 代码

```js

    // 1.获取元素 box2  是今日团
    let box2 = document.querySelector('.box2');
    // 2.获取box2距离顶部的高度
    let box2Top = box2.offsetTop;
    // 3.给window添加一个滚动事件(scroll)
    window.onscroll = function () {
      // 4.获取页面卷曲的距离(页面跑出去多高)
      let pageScroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      // console.log(pageScroll);
      // 5.对比看看页面跑出去的高度 是不是 >= box2距离顶部的高度  如果是这样的 那么就让box2固定
      if (pageScroll >= box2Top) {
        // 如果是这样的 那么就让box2固定
        box2.style.position = 'fixed';
        box2.style.top = 0;
      } else {
        // 6.如果不是这样 那就 不让它固定
        box2.style.position = "static";
      }

    }

```

## 案例:仿淘宝侧边栏

### 需求

  1.当滚动条往下滚动的时候 到banner刚好到顶部的时候 侧边栏固定 否则 正常走
  2.当滚动条到某一位置的时候  出现返回顶部 否则不出现

### 功能一:

  1.获取元素 侧边栏 返回顶部 banner区域 main
  2.获取banner到页面顶部的距离 offsetTop
  3.获取main与顶部的距离  offsetTop
  4.给window绑定滚动事件
  4.1 如果window.pageYOffset(页面跑出去的距离) > banner的offsetTop
  4.1.1 让侧边栏固定
  4.2 否则 不固定

### 功能二: 当滚动条到某一位置的时候  出现返回顶部 否则不出现

  ```js
   // 功能2: 如果页面卷曲的高度 》= main距离页面顶部的距离 那就显示返回顶部 否则不显示
      if (window.pageYOffset >= mainTop) {
        // 显示

        goBack.style.display = 'block';
      } else {
        // 隐藏
        goBack.style.display = 'none';
      }
  ```