# Vue3

## Vue3优势
* Vue3运行性能大幅提升,速度是Vue2的1.5倍左右
* Vue3支持tree shaking , 可以进行按需编译,编译后的文件体积比Vue2更小
* Vue3组合式API使应用中功能代码更聚合,使组件间公共逻辑抽取更容易
* Vue3对Typescript的支持更加友好,对大型前端应用的支持更加游刃有余
* Vue3中提供了`teleport`,`suspense`等更先进功能

## 使用Vite创建项目
1. 创建应用: `npm init vite vue-tutorial`
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


## 响应式组件状态 reactive
------

reactive函数也可以用来创建响应式数据

------

使用 reactive 函数创建基于引用数据类型的响应式数据
```js
import { reactive } from "vue";

export default{
  setup(){
    //创建person对象
    const person = reactive({ name: "张三" , age: 20 });

    //点击事件
    const onClickHandler = () => {
      //
      person.name = "里斯";
      person.age = 50;
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

-------

reactive 函数只能基于引用数据类型创建响应式数据 , 对于基本数据类型它是不起作用的
```js
import { reactive } from "vue";
export default {
    setup(){
        let name = reactive("张三");
        const onClickHandler = () => {
            name = reactive("里斯");
        }
        return {
            name,
            onClickHandler
        }
    }
}
```

在点击按钮后将`newPerson`中的值赋值给`person`
```js
import { reactive } from 'vue';

export default {
    name: 'ChangePerson',
    setup(){
        let person = reactive({name:'张三',age:30});
        const newPerson = {name: '里斯' , age: 50};
        const onClickHandler = () => {
            for(const attr in newPerson){
                person[attr] = newPerson[attr];
            }
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

ref既可以创建基于基本数据类型的响应式数据,也可以创建基于引用数据类型的响应式数据,reactive只用于创建基于引用数据类型的响应式数据

ref在JS中使用时需要`.value`,而reactive在JS中使用不需要`.value`,在模板中使用时都不需要加value

ref创建的响应式数据可以被直接整体赋值,而reactive创建的响应式数据不可以,若要整体赋值需要使用遍历的方式

------

为什么使用ref方法创建的响应式数据在修改时需要使用value属性,而reactive方法创建的响应式数据不需要

ref既可以创建基于基本数据类型的响应式数据,也可以创建基于引用数据类型的响应式数据,基本数据类型的响应式是通过类的属性访问器实现的,引用数据类型的响应式是通过代理对象实现的,虽然内部实现不同,但为了更好的API使用体验,内部封装了统一的调用入口,即value属性,具体通过哪种方式创建响应式数据由内部统一处理

reactive只用于创建基于引用数据类型的响应式数据,不需要供统一的调用入口,所以没有必要使用value属性

## 计算属性 computed
接收回调函数作为参数,基于回调函数中使用的响应式数据进行计算属性的创建,回调函数的返回值就是计算结果
```js
import { ref, computed } from "vue";

export default {
  setup() {
    const names = ref([
      "林俊杰",
      "孙燕姿",
      "周杰伦",
      "张惠妹",
      "刘若英",
      "林宥嘉",
      "刘德华",
      "张韶涵",
      "周笔畅",
      "孙楠",
    ]);

    const search = ref("");
    const filterNames = computed(() =>
      names.value.filter((name) => name.includes(search.value))
    );
    return {
      search,
      filterNames,
    };
  },
};
```

```vue
<template>
  <div>
    <input type="text" v-model="search" />
    <ul>
      <li v-for="(item,index) in filterNames" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
```

## 监听状态 watch
------

watch函数用于监听响应式数据的变化

------

* 使用 watch 函数监听基于 ref 创建的响应式数据(基本数据类型)
```js
import { ref , watch } from 'vue'

export default{
  setup(){
    //定义响应式变量 text
    const text = ref("");
    //监听文本改变 并打印结果
    watch(text,(current,previous) => {
      console.log("current",current);
      console.log("previous",previous);
    })
    return { text }
  }
}
```

```vue
<template>
  <div>
    <input type="text" v-model="text">
  </div>
</template>
```

* 使用watch监听基于ref创建的响应式数据(引用数据类型)
```js
import { ref , watch } from "vue";

export default {
    setup(){
        const person = ref({ name : "张三" });
        watch(person.value,(current) => {
            console.log(current);
        })

        function onClickHandler(){
            person.value.name = "里斯";
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
      <button @click="onClickHandler">{{person.name}}</button>
  </div>
</template>
```

* 使用watch监听响应式数据内部的具体属性(基本数据类型)
```js
import { ref , watch } from "vue";

export default {
    setup(){
        const person = ref({ name : "张三" });
        watch(
            () => person.value.name,
            (current) => {
                console.log(current);
            }
        );

        function onClickHandler(){
            person.value.name = "里斯";
        }
        return {
            person,
            onClickHandler
        }
    }
}
```

```vue
<template>
  <div>
      <button @click="onClickHandler">{{person.name}}</button>
  </div>
</template>
```

* 使用watch监听响应式数据内部的具体属性(引用数据类型)
```js
import { ref , watch } from 'vue';

export default {
  setup() {
    const person = ref({ brand: { title: "宝马" }, name: "张三" });
    const changeBrandTitle = () => {
      person.value.brand.title = "奔驰";
    };
    const changeName = () => {
      person.value.name = "里斯";
    };
    watch(person.value.brand, (current) => {
      console.log(current);
    });
    return {
      person,
      changeBrandTitle,
      changeName,
    };
  },
};
```

```vue
<template>
  <div>
    <p>{{ person.brand.title }} {{ person.name }}</p>
    <button @click="changeBrandTitle">title</button>
    <button @click="changeName">name</button>
  </div>
</template>
```

* 使用watch监听基于reactive创建的响应式数据
```js
import { reactive , watch } from 'vue';

export default {
    setup(){
        const person = reactive({ name : "张三" });
        const onClickHandler = () => {
            person.name = "里斯";
        }
        watch(person , (current , previous) => {
            console.log(current);
        })
        return {
            person,
            onClickHandler
        }
    }
}
```

```vue
<template>
  <div>
      {{ person.name }}
      <button @click="onClickHandler">button</button>
  </div>
</template>
```

* 使watch监听数据在初始时执行一次
```js
import {ref , watch} from "vue";

export default {
    setup(){
        const firstName = ref("");
        const lastName = ref("");
        watch([firstName , lastName] , current => {
            console.log(current);
        })
        return {
            firstName,
            lastName
        }
    }
}
```

```vue
<template>
  <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
  </div>
</template>
```

* 使watch监听数据在初始时执行一次
```js
import { ref , watch } from "vue";

export default {
    setup(){
        const firstName = ref("hello");
        const lastName = ref("world");
        watch(
            [firstName,lastName],
            current => {
                console.log(current);
            },
            {
                immediate: true,
            } 
        )
        return{
            firstName,
            lastName
        }
    }
}
```

```vue
<template>
  <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
  </div>
</template>
```

## 监听状态 watchEffect
------

watchEffect和watch一样,都是用于监听响应式数据的变化

------
watchEffect只关心数据的最新值,不关心旧值,而且watchEffect默认会在初始时执行一次

```js
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    watchEffect(() => {
      console.log(firstName.value);
      console.log(lastName.value);
    });
    return{
      firstName,
      lastName
    }
  },
};
```

```vue
<template>
  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
  </div>
</template>
```

## toRef函数
------

toRef方法用于将响应式数据内部的普通数据转换为响应式数据,并且转换后的数据和原始数据存在`引用关系`,存在引用关系意味着当原始数据发生变化后,toRef转换后的数据也会跟着变化

------

```js
import { ref , toRef } from "vue";

export default{
  setup(){
    const person = ref({ name: "张三" });
    const onClickHandler = () => {
      person.value.name = "里斯";
    }
    return{
      name: toRef(person.value,"name"),
      person,
      onClickHandler
    }
  }
}
```

```vue
<template>
  <div>
    <p>{{name}}</p>
    <p>{{person}}</p>
    <button @click="onClickHandler">button</button>
  </div>
</template>
```

------ 

需求:当响应式数据的结构层级比较深时,在模板中使用比较繁琐,能否在模板中使用时简化结构层级呢?
```js
export default{
  setup(){
    const person = ref({ brand: {name: "宝马"} });
    return {person}
  }
}
```

```vue
<template>{{ person.brand.name }}</template>
```

如果能够将模板中的`person.brand.name`简化成`brandName`,模板代码会更加简洁
```vue
<template>
  <div>
    <p>{{ person }}</p>
    <p>{{ brandName }}</p> 
    <button @click="onClickHandler">button</button>     
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup(){
        const person = ref({ brand: {name: "宝马"} });
        const onClickHandler = () => {
            person.value.brand.name = "奔驰";
        };
        return{
            person,
            brandName: person.value.brand.name,
            onClickHandler
        }
    }
}
</script>
```

------

```vue
<template>
  <div>
      <p>{{person}}</p>
      <p>{{brandName}}</p>
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref , toRef } from "vue";

export default {
    setup(){
        const person = ref({ brand: {name:"宝马"} });
        const onClickHandler = () => {
            person.value.brand.name = "奔驰";
        };
        return{
            person,
            brandName: toRef(person.value.brand , "name"),
            onClickHandler
        }
    }
}
</script>
```

