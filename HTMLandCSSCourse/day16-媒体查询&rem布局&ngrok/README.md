# 移动Web

## 媒体查询

### 媒体查询的作用

根据终端(媒介|媒体)的特性(网页宽高 设备宽高 横竖屏)，可以给不同的样式

### 媒体查询的用法(not(非) and(且) or(或者))

- 不同的设备应用不同的css文件(优点:对于不同的设备有对应的css文件，代码好维护且清晰  缺点: 产生了大量的冗余代码)
  ` 语法: <link rel="stylesheet" type="text/css" href="css的路径" media="过滤条件" > `

- 不同的设备应用不同的css样式(缺点:代码不好维护且不够清晰  优点: 不会产生了大量的冗余代码)
  `语法: @media  screen and (width: xxxx) and (height: xxxx) { 样式}`

  ` 每个单词之间用空格隔开 否则会出错 `
### 媒体特性

- html宽 html高
- 设备宽  设备高
- 最大宽  最大高
- 最小宽  最小高
-  横屏 竖屏

## rem布局

### rem

 rem是一个相对长度单位  em相对于自己的font-size  
 rem相对的是html的font-size

### rem布局原理

- 1.找一个设计图 假设640  人为的分成20份 计算一分多少像素 32像素
- 2.用ps量出设计图中的元素的大小 用这个大小/32 计算得到的是元素在设计图中的占了几份
- 3.适配手机 如果宽度为320的手机 用手机的宽度/20 得出一份是多少像素  再用刚才第二步得到的份数*手机中一份的大小就是手机中真正占的像素


### rem布局的插件(插件)  https://www.w3cplus.com/   https://github.com/huainanhai/flexible

flexible的作用是为了不写媒体查询 通过js自动检测 自动计算

- 1. 引入flexible_css.debug.js
- 2. 引入flexible.debug.js
- 3. 引入css

`公式: 属性: calc(设计图量出来的尺寸rem / 设计图的宽度/10)` 



## 真机调试

### 让手机和电脑在同一个网中(链接同一个wifi)

### ghostlab   https://www.vanamco.com/ghostlab/

### ngrok

#### 第一步: 注册ngrok


#### 第二步: 下载ngrok


#### 第三步: 复制密钥


#### 第四步 找到ngrok的目录


####  第五步 设置密钥


####  第六步:执行ngrok


#### 第七步: 在本地启动服务



### 移动端调试js

- vconsole  https://github.com/Tencent/vConsole