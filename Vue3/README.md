# Vue3

## Vue3优势
* Vue3运行性能大幅提升,速度是Vue2的1.5倍左右
* Vue3支持tree shaking , 可以进行按需编译,编译后的文件体积比Vue2更小
* Vue3组合式API使应用中功能代码更聚合,使组件间公共逻辑抽取更容易
* Vue3对Typescript的支持更加友好,对大型前端应用的支持更加游刃有余
* Vue3中提供了`teleport`,`suspense`等更先进功能

## 使用Vite创建项目
1. 创建应用: `npm init vite-app vue-tutorial` 或 `npx create-vite-app vue-tutorial`
2. 切换至应用根目录: `cd vue-tutorial`
3. 下载应用依赖: `npm install`
4. 启动应用: `npm run dev`
5. 访问应用: `localhost:3000`

## Vite缺点
Vite虽然构建速度快,但目前它默认安装的插件非常少,随着开发过程依赖增多,需要自己额外配置

## 编辑器插件
* [Vloar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar):Vue3语法支持

* [Vue.js AutoImport](https://marketplace.visualstudio.com/items?itemName=ishiyama.vue-autoimport): 引用组件

* [Vue3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets):Vue3代码片段

* [Prettier-Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): 代码格式化

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 代码质量检查

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): 覆盖编辑器编码风格配置

* [Mater Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): 编辑器主题

* [Chinese(Simplifled) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans): 中文语言支持

## 组合式API的优势
在选项式API中,它将数据和逻辑进行了分离,所有不相关的数据被放置一起,所以不相关的逻辑被放置在一起,随着应用规模的增加,项目将会变得越来越难以维护

在组合式API中,它将同一个功能的逻辑和数据放置在一起,使同一个功能代码更加聚合

同一个功能的代码可以被抽取到单独的文件中,使应用代码更容易维护

## 组合式API入口
`setup`函数是一个新的组件选项,作为在组件中使用组合式API的入口
`setup`函数在任何生命周期函数之前执行,且函数内部`this`为`undefined`,它不绑定组件实例对象
```js
export default {
    //组合式API入口 setup函数在任何生命周期函数之前执行
    setup(){
        //undefined
        console.log(this);
    },
    beforeCreate(){
        //before create
        console.log("before create");
    }
}
```

`setup`函数的返回值为对象类型,对象中的属性可以在其他选项和模板中使用,因为对象中的属性会被添加到组件实例对象中
```vue
<template>
  <div>
      {{name}}
      {{age}}
  </div>
</template>
```

```js
export default {
  setup() {
    let name = "张三";
    let age = 20;

    //返回字段
    return {
      name,
      age,
    };
  },
};
```

在`setup`方法中声明的变量虽然可以在模板中显示,但不是响应式,当数据更改后界面不会发生变化
```vue
<template>
  <div>
      {{name}}
      {{age}}
    
      <button @click="onClickHandler">button</button>
  </div>
</template>
```

```js
export default {
  setup() {
    let name = "张三";
    let age = 20;

    const onClickHandler = () => {
        name = "里斯";
        age = 30;
    }

    //返回字段
    return {
      name,
      age,
      onClickHandler
    };
  }
};
```

## 响应式组件状态 ref
------

ref函数用户创建响应式数据,即数据变化视图更新

------

使用 ref 函数创建基本数据类型的响应式数据
```js
//引入ref
import { ref } from "vue";

export default {
  setup() {
    const name = ref("张三");
    const age = ref(29);

    return {
      name,
      age,
    };
  },
};
```

使用 ref 创建的数据在模板中可以直接使用
```vue
<template>
  <div>
    {{ name }}
    {{ age }}
  </div>
</template>
```

在 JavaScript 中通过 value 属性修改数据
```js
//引入ref
import { ref } from "vue";

export default {
  setup() {
    const name = ref("张三");
    const age = ref(29);

    const onClickHandler = () => {
        name.value = "里斯";
        age.value = 30;
    }

    return {
      name,
      age,
      onClickHandler
    };
  },
};
```

```vue
<template>
  <div>
    {{ name }}
    {{ age }}
    <button @click="onClickHandler">button</button>
  </div>
</template>
```

------

使用 ref 函数创建引用数据类型的响应式数据
```js
import { ref } from 'vue'
export default {
    setup(){
        const person = ref({ name: "张三" , age: 25 })
        const onClickHandler = () => {
            person.value.name = "王五";
            person.value.age = 60;
            //重新为 person 赋值
            // person.value = { name: "里斯" , age: 20 }
        }

        return{
            person,
            onClickHandler
        }
    }
}
```

```vue
<template>
  <div>
      {{person.name}}
      {{person.age}}

      <button @click="onClickHandler">button</button>
  </div>
</template>
```
