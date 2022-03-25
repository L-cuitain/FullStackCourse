# WebAPI

## 操作表单的常用属性

### 表单的value属性

  语法: 元素.value = "值"

### 表单的type属性

  语法: 元素.type = "值" (值必须是html规定的)

### checked属性

  语法: 元素.checked = boolean true代表选中 false代表不选中 (只要不是空字符串都是可以转换成true)

### disabled属性

  语法: 元素.disabled = boolean true代表不能点(禁用)  false代表能点(可用)

### selected属性

  语法: 元素.selected = boolean true代表选中
  
  ```html
   <!-- 点击按钮 选中你爱吃的一个菜 -->

  <!-- 按钮 -->
  <button>点击 选中你爱吃的菜</button>
  <!-- 下拉菜单 -->
  <select>
    <!-- 选项 option -->
    <option value="红烧鲤鱼">红烧鲤鱼</option>
    <option value="羊蹄子">羊蹄子</option>
    <option value="酸菜肚丝">酸菜肚丝</option>
    <option value="火山下雪">火山下雪</option>
    <option value="东坡肘子" id="east">东坡肘子</option>
    <option value="水煮鱼" id="fish">水煮鱼</option>
  </select>

  <script>
    // 点击按钮 选中你爱吃的一个菜 

    // 1.选中按钮 选项
    let oBtn = document.querySelector('button');
    let oFish = document.querySelector('#east');
    // 2.给按钮添加点击事件
    oBtn.onclick = function () {
    // 3.让爱吃的那个菜 被选中 boolen
      oFish.selected = true;
    }
    
  ```