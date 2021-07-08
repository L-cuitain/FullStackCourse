# jQuery

## 客户端存储(浏览器上存数据、微信、各种APP)

## cookie(node)

## sessionStorage(极少用到)

数据只能存一会儿，不能永久存储

### localStorage(主要讲的) 本地存储

#### 介绍

localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存。

<img src="image/image-20200416141443745.png" alt="image-20200416141443745" style="zoom:67%;" />

### 方法
setItem (key, value) —— 保存数据，以键值对的方式储存信息。
getItem (key) —— 获取数据，将键值传入，即可获取到对应的value值。
removeItem (key) —— 删除单个数据，根据键值移除对应的信息。
clear () —— 删除所有的数据
某一个key = localStorage.key (index) —— 获取某个索引的key

```html
<body>
  <button class="add">添加数据</button>
  <button class="get">获取数据</button>
  <button class="remove">删除某一条数据</button>
  <button class="cle">清空数据</button>
  <button class="keys">获取键值</button>
  <script>
    // 增 window.loacalStorage.setItem(key, value)
    document.querySelector('.add').onclick = function () {
      window.localStorage.setItem('name2', '张四')
      localStorage.setItem('name', '["张三","里斯"]')
      localStorage.setItem('name1', '{"name":"zs","age": 13,"family": "young"}')
    }
    // 查 值 = localStorage.getItem(key)
    document.querySelector('.get').onclick = function () {
      console.log(localStorage.getItem('name2'));
      console.log(JSON.parse(localStorage.getItem('name')));
      console.log(JSON.parse(localStorage.getItem('name1')));
    }
    // 删 删除一个 全部删除(清空)
    // localStorage.removeItem(key)
    document.querySelector('.remove').onclick = function () {
      localStorage.removeItem('name2')
    }

    // 全部删除(清空)
    // localStorage.clear()
    document.querySelector('.cle').onclick = function () {
      localStorage.clear()
    }

    // 通过索引获取key
    document.querySelector('.keys').onclick = function () {
      console.log(localStorage.key(1))
    }
  </script>
</body>
```
