# CSS3

## 动画

### 为什么要学动画

- 手机页面的下滑按钮跳动 音乐图标的旋转

### 动画的语法

#### 定义动画

```css
  /* 关键帧 */
  @keyframes 动画名字 {
    /* 动画阶段 */
    0% {}
    100% {}
  }

  @keyframes 动画名字 {
    /* 动画阶段 */
    0% {}
    50% {}
    100% {}
  }


  @keyframes 动画名字 {
    /* 动画阶段 */
    from {}
    to {}
  }

```

#### 调用动画

- animation-name 你定义的动画的名字
- animation-duration 定义的动画完成整个过程需要多长时间
- animation-timing-function 动画时间函数 控制动画运动的速度的 linear ease ease-in ease-out ease-in-out
- animation-delay 让动画延迟多少时间开始执行
- animation-iteration-count 设置动画次数 1 2 4 6 infinite
- animation-direction  normal按照动画的定义顺序执行  reverse 按照动画定义的反向执行
- animation-fill-mode  动画结束时停留在什么状态 forwards停留在结束状态   backwards回到开始
- animation-play-state 动画的播放状态 running paused