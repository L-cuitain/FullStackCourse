# CSS3

## 伸缩布局

### 概念

- 伸缩容器 : 含有display:flex的属性的元素就是伸缩容器

- 伸缩项目 : 在伸缩容器中的所有子元素都是伸缩项目

- 主轴:  在伸缩容器内有一条默认的虚拟线 自左向右(默认的) 

- 侧轴: 垂直于主轴的是侧轴


### 属性

- 伸缩容器
  - display: flex 把一个普通元素变成伸缩容器
- 主轴的属性
  - 主轴方向 flex-direction: row(行) | row-reverse | column(列) | column-reverse
  - 伸缩项目在主轴上的对齐方式 justify-content: flex-start | flex-end | center | space-between(两端对齐) | space-around(空间环绕)

- 侧轴的属性
  - 是否换行 flex-wrap:  nowrap(不换行) wrap(换行)
  - align-items: 设置伸缩项目不换行的对齐方式 stretch flex-start  flex-end  center
  - align-content: 设置伸缩项目换行的对齐方式  flex-start 侧轴的开始点对齐  flex-end 侧轴的结束点对齐  center 居中 space-between(两端对齐) | space-around(空间环绕)

- 伸缩项目的属性  http://blog.xiaoboswift.com/flexbox/
  - flex: 设置的是伸缩项目在伸缩容器中所占的剩余空间的比例
  - order: 设置伸缩项目的排序顺序  默认顺序是html标签的顺序 值越小 越靠前
  - align-self: 自我对齐 关于某一个伸缩项目的对齐方式 和align-items的属性值完全一样
