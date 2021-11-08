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

## toRefs函数
------

通过`toRef`方法一次只能转换一个数据,通过`toRefs`方法可以实现批量数据转换

------

toRefs方法接收引用数据类型的响应式数据,它可以将数据中的第一层属性全部转换为响应式数据,返回值是一个对象,对象中存储所有转换后的响应式数据
```vue
<template>
  <div>
    {{name}}
    {{age}}
    {{brand.title}}
    {{brand.year}}
  </div>
</template>

<script>
import { reactive , ref } from 'vue'

export default{
  setup(){
    const person = reactive({
      name: "张三",
      age: 20,
      brand: { title: "宝马" , year: 1 }
    });
    return{
      ...toRefs(person)
    }
  }
}
</script>
```

对引用数据类型颞部的数据进行转换
```vue
<template>
  <div>
      {{name}}
      {{age}}
      {{year}}
  </div>
</template>

<script>
import { reactive , toRefs } from "vue";

export default {
    name: "APP",
    setup(){
        const person = reactive({
            name: "张三",
            age: 20,
            brand: { title: "宝马" , year: 1 }
        });
        return{
            ...toRefs(person),
            ...toRefs(person.brand)
        }
    }
}
</script>
```

## 组件通讯
------

父组件通过props向子组件传递数据

------

App.vue
```vue
<template>
  <div>
    <div>I am parent component</div>
    <hr />
    <ChildComA :msg="msg"/>
  </div>
</template>

<script>
import ChildComA from "./components/ChildComA.vue";
import { ref } from "vue";

export default {
  components: {
    ChildComA,
  },
  setup() {
    const msg = ref("a message from parent");
    return{
      msg
    }
  },
};
</script>
```


components/ChildComA.vue
```vue
<template>
  <div>
      {{childMsg}}
      <hr />
      {{ msg }}
  </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: ["msg"],
    setup(props){
        //当父组件更新props时 setup 函数时不会重新执行的
        //所以在 setup 函数中使用 props 时需要用到 computed 或 watch 来响应 props 的变化
        //注意: 直接在模板中使用 props 数据时没有这个问题的
        const childMsg = computed(() => props.msg + "AA");
        return{
            childMsg
        }
    }
}
</script>
```

------

子组件通过自定义事件向父组件传递数据
App.vue
```vue
<template>
  <div>
    <div>I am parent component</div>
    <hr />
    <ChildComB :msg="msg" @onMsgChanged="onMsgChanged"/>
  </div>
</template>

<script>
import ChildComB from "./components/ChildComB.vue";

import { ref } from "vue";

export default {
  components: {
    ChildComB,
  },
  setup() {
    const msg = ref("i am a message");
    const onMsgChanged = (data) => {
      msg.value = data;
    }
    return{
      msg,
      onMsgChanged
    }
  },
};
</script>
```

components/ChildComB.vue
```vue
<template>
  <div>
      {{childMsg}}
      <hr />
      {{msg}}
      <hr />
      <button @click="onMsgChanged">change msg</button>
  </div>
</template>

<script>
export default {
    props: ["msg"],
    setup(props,{ emit }){
        const onMsgChanged = () => {
            emit("onMsgChanged","change msg from children");
        }
        return{
            onMsgChanged
        }
    }
}
</script>
```

注意事项:在Vue2中,模板需要被一个根元素包裹,但在Vue3中是不需要的,Vue3支持在模板中编写代码片段
```vue
<template>
  <div>{{ childMsg }}</div>
  <button @click="onClickHandler">change msg</button>
</template>
```

如果在模板中使用代码片段,自定义事件需要被显式的声明在emits选项中
```js
emits: ["onMsgChanged"]
```

## 组件生命周期
`setup`:Vue3中组合式API,它会在创建组件实例对象前执行,会在每次组件重新挂载时执行

创建组件实例对象前执行
```js
export default{
  setup(){
    console.log('setup');
  },
  beforeCreate(){
    console.log("before create");
  }
}
```

每次组件重新挂载时执行
App.vue
```vue
<template>
  <div>
    <button @click="show = !show">toggle</button>
    <ChildComA v-if="show"/>
  </div>
</template>


<script>
import ChildComA from "./components/ChildComA.vue";

import { ref } from "vue";

export default {
  components: {
    ChildComA,
  },
  setup() {
    console.log("setup");

    const show = ref(true);
    return{
      show
    }
  }
};
</script>
```

components/ChildComA.vue
```vue
<template>
  <div>
      child component
  </div>
</template>

<script>
export default {
    name: "ChildComponent",
    setup(){
        //setup 函数会在组件每次重新渲染时执行
        console.log("setup");
    }
}
</script>
```

`onMounted` 组件挂载完成后执行

`onUpdated` 组件数据更新后执行

`onUnmounted` 组件卸载后执行

App.vue
```vue
<template>
  <div>
    <button @click="show = !show">toggle</button>
    <ChildComB v-if="show"/>
  </div>
</template>


<script>
import ChildComB from './components/ChildComB.vue'

import { ref } from "vue";

export default {
  components: {
    ChildComB,
  },
  setup() {
    const show = ref(true);
    return{
      show
    }
  },
};
</script>
```

components/ChildComB.vue
```vue
<template>
  <div>
      {{count}}
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { onMounted , onUnmounted , onUpdated , ref } from "vue";

export default {
    setup(){
        let timer = null;
        //组件挂载完成后开启定时器
        onMounted(() => {
            timer = setInterval(() => {
                console.log("timer...");
            },1000);
        })
        //组件卸载完成后清除定时器
        onUnmounted(() => {
            clearInterval(timer);
        });
        const count = ref(0);
        const onClickHandler = () => {
            count.value = count.value + 1;
        }
        //组件更新之后在控制台中输出 onUpdated
        onUpdated(() => {
            console.log("onUpdated");
        });
        return{
            count,
            onClickHandler
        }
    }
}
</script>
```

## 与服务端通信
向服务器端发送请求获取列表数据渲染列表数据,没有数据显示暂无数据,如果请求报错展示错误信息,加载过程显示loading.
```vue
<template>
  <div>
    <div v-if="loading">loading...</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="data && data.length > 0">
      <ul>
        <li v-for="(item,index) in data" :key="index">{{item.title}}</li>
      </ul>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>
```

```js
<script>
import { ref } from 'vue'
import axios from 'axios';

export default{
  setup(){
    //用于存储列表数据
    const data = ref(null);
    //用于标识加载状态
    const loading = ref(false);
    //用于存储错误信息
    const error = ref(null); 
    //用于发送请求方法
    async function getPosts(){
      //更新加载状态
      loading.value = true;
      //try catch捕获异常
      try{
        //发送请求
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //存储列表数据
        data.value = response.data;
      }catch(err){
        //存储错误信息
        error.value = err.message;
      }
      //更新加载状态
      loading.value = false;
    }
    //调用方法 发送请求
    getPosts();

    //返回模板所需数据
    return{
      data,
      loading,
      error
    }
  }
}
</script>
```

------

将获取Posts数据的逻辑抽取单独文件中,使其可以在多个组件中被重复使用
```vue
<script>
import { ref } from 'vue'
import axios from 'axios';

function usePosts(){
    //用于存储列表数据
    const data = ref(null);
    //用于标识加载状态
    const loading = ref(false);
    //用于存储错误信息
    const error = ref(null); 
    //用于发送请求方法
    async function getPosts(){
      //更新加载状态
      loading.value = true;
      //try catch捕获异常
      try{
        //发送请求
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //存储列表数据
        data.value = response.data;
      }catch(err){
        //存储错误信息
        error.value = err.message;
      }
      //更新加载状态
      loading.value = false;
    }
    //调用方法 发送请求
    getPosts();
}

export default{
  setup(){
    const { data , loading , error , getPosts } = usePosts();

    getPosts();
    
    //返回模板所需数据
    return{
      data,
      loading,
      error
    }
  }
}
</script>
```

## 获取DOM对象

获取单个 DOM 对象
```vue
<template>
    <div ref="divRef">
        Hello Ref
    </div>
</template>

<script>
import { ref , onMounted } from "vue";

export default {
    setup(){
        const divRef = ref(null);
        onMounted(() => {
            console.log(divRef.value);
        })
        return{
            divRef
        }
    }
}
</script>
```

获取一组 DOM 对象
```vue
<template>
  <div>
      <ul>
          <li v-for="(item,index) in list" :key="index" :ref="(el) => (elms[index] = el)">{{item}}</li>
      </ul>
      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
import { ref , onMounted , onUpdated } from "vue";

export default {
    setup(){
        const list = ref(["a","b","c"]);
        const elms = ref([]);
        const onClickHandler = () => list.value.push("d")
        onMounted(() => console.log(elms.value));
        onUpdated(() => console.log(elms.value));
        return{
            list,
            elms,
            onClickHandler
        }
    }
}
</script>
```

## provide,inject函数

------

通过provide , inject函数的配合使用,可以实现跨组件传递数据(组件与组件存在嵌套关系)

------

父组件 App.vue
```vue
<template>
  <ChildComA />
</template>

<script>
import { ref , provide } from "vue";
import ChildComA from './components/ChildComA.vue'

export default{
  components:{
    ChildComA
  },
  setup(){
    const person = ref({ name: "张三" });
    const changePerson = () => {
      person.value.name = "里斯";
    }
    provide("person",person);
    provide("changePerson",changePerson);
  }
}
</script>
```

子组件 components/ChildComA.vue
```vue
<template>
    <LastChildComA />
</template>

<script>
import LastChildComA from './LastChildComA.vue';

export default {
    components: {
        LastChildComA
    },
}
</script>
```

孙组件 components/LastChildComA.vue
```vue
<template>
  <div>
      {{person.name}}
      <button @click="changePerson">button</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
    setup(){
        const person = inject("person");
        const changePerson = inject("changePerson");
        return{
            person,
            changePerson
        }
    }
}
</script>
```

## teleport组件
------

teleport组件可以将指定组件渲染应用外部的其他位置
比如弹框组件,它可能在任意组件中使用,但它不属于任意组件,所以不能在使用它的组件中渲染它,我们需要将它渲染到指定位置

------

App.vue
```vue
<template>
  <div>
    <teleport to="#modal">
      <Modal />
    </teleport>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default{
  components: {
    Modal
  },
}
</script>
```

components/Modal
```vue
<template>
  <div class="wrapper">
      <div class="content">
          <a class="close" href="javascript:;">关闭</a>
      </div>
  </div>
</template>

<script>
export default {
    name: "Modal"
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  width: 660px;
  height: 400px;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #999;
  text-decoration: none;
}
</style>
```

index.html
```html
<body>
  <div id="modal"></div>

  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
```

## Suspense组件

------

Suspense用于确保组件中的setup函数调用和模板渲染之间的执行顺序,先执行setup后渲染模板

当组件中的setup被写成异步函数的形式,代码执行的顺序就变成了先渲染模板后执行setup函数了

------

App.vue
```vue
<template>
  <div>
    <Suspense>
      <Posts />
    </Suspense>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';

export default{
  components: {
    Posts
  },
  name: "App"
}
</script>
```

components/Posts
```vue
<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
    async setup(){
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return{
            data: response.data
        }
    }
}
</script>
```

通过Suspense组件还可以为异步操作添加等待提示效果
App.vue
```vue
<template>
  <div>
    <Suspense>
      <template v-slot:default>
        <Posts />
      </template>
      <template v-slot:fallback>loading...</template>
    </Suspense>
  </div>
</template>

<script>
import Posts from './components/Posts.vue';

export default{
  components: {
    Posts
  },
  name: "App"
}
</script>
```

## 过渡动画

### 概述
Vue提供了transition组件供我们执行过渡动画,我们只需要使用transition组件包裹要执行动画的元素即可

执行过渡动画的前提条件是元素具有创建与销毁的操作
```vue
<transition>
  <h1>hello world</h1>
</transition>
```

当创建元素时,transition组件会为执行动画的元素添加三个类名,我们可以通过这三个类名为元素添加入场动画
```css
.enter-form{}   // 元素执行动画的初始样式(动画起点样式)
.enter-to{}   // 元素执行动画的目标样式(动画终点样式)
.enter-active{}   // 可以用于指定元素指定动画的类型
```

```css
.enter-from{ opacity: 0 }
.enter-to { opacity: 1 }
.enter-active { transition: opacity 2s ease-in }  // ease-in 先慢后快
```

当销毁元素时,transition组件会为执行动画的元素添加三个类名,我们可以通过这三个类名为元素添加离场动画样式
```css
.leave-from{}  // 元素执行动画的初始样式(动画起点样式)
.leave-to{}  // 元素执行动画的目标样式(动画终点样式)
.leave-active{}   //可以用于指定元素指定动画类型
```

```css
.leave-from { opacity: 1 }
.leave-to { opacity: 0 }
.leave-active{ transition: opacity 2s ease-out }  // ease-out 先快后慢
```

如果在页面中有多个元素要执行动画,而多个元素要执行的动画不同时,为了对多个元素的动画样式进行区分,在调用transition组件时需要为它添加name属性以区分样式类名

```vue
<transition name="fade">
  <h1>hello world</h1>
</transition>
```

```css
.fade-enter-from{}
.fade-enter-to{}
.fade-enter-active{}

.fade-leave-from{}
.fade-leave-to{}
.fade-leave-active{}
```

### 示例
需求: 点击按钮让元素显示隐藏(执行动画)
```vue
<template>
  <div>
      <transition name="fade">
          <h2 v-if="show">hello world</h2>
      </transition>
      <button @click="show = !show">button</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(){
        const show = ref(false);

        return{
            show
        }
    }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease-in;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 2s ease-out;
}
</style>
```

## 状态管理 Vuex

### 问题
在不使用全局状态管理库时,应用状态由组件管理,当多个组件需要共享使用同一个应用状态时,应用状态需要通过props或自定义事件在组件之间进行传递,在组件与组件之间的关系比较疏远时,手递手的这种传递方式显得特别混乱,使得应用的维护变得困难

在使用了全局状态管理库后,需要共享的应用状态被单独存储在一个独立于组件的Store对象中,所有组件可以直接从这个对象中获取状态,省去了繁琐的组件状态传递过程,而且当Store中的状态发生变化后,组件也会自动更新

### Vuex工作流程
* State: 用于存储应用状态(store.state)
* Action: 用于执行异步操作(dispatch)
* Mutation: 用于修改state中的应用状态(commit)
* Getter: Vuex中的计算属性(store.getters)
* Moudle: 模块,用于对状态进行拆分

在组件中开发者可以调用`dispatch`方法触发`Action`执行异步操作,当异步操作执行完成后,在Action中可以继续调用commit方法触发mutaion修改状态,当状态被修改以后,视图更新

### 下载
Vuex目前有两个版本,一个是`3.6.2`,另一个是`4.0.2`,3.X的版本是供Vue2使用,4.X版本是供Vue3使用

下载指定版本号的Vuex
```
npm install vuex@4.0.2
```

### 创建Store
src/store/index.js
```js
//创建Store
import { createStore } from 'vuex';

export default createStore({});
```

src/main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

//挂载 store
import store from './store';
const app = createApp(App);


app.use(store).mount('#app')
```


### state
------

在应用状态对象中存储`username`状态.

------

```js
export default createStore({
    state: {
        username: "张三"
    }
});
```

在组件中获取`username`状态
```vue
<template>
  <div>
    {{$store.state.username}}
  </div>
</template>
```

```vue
<script>
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore();
    console.log(store.state.username);
  }
}
</script>
```

### getters
------

getters是vuex中的计算属性,基于现有状态计算出新的状态

------

```js
export default createStore({
    getters:{
        newUsername(state){
            return state.username + "😈😈😈😈"
        }
    }
});
```

```vue
<template>
  <div>
    {{$store.getters.newUsername}}
  </div>
</template>
```

```vue
<script>
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore();
    console.log(store.getters.newUsername);
  }
}
</script>
```

### mutations
------

mutations是Vuex中用于修改状态的方法

------

```js
export default createStore({
    mutations:{
        updateUsername(state,username){
            state.username = username;
        }
    }
});
```

```vue
<template>
  <div>
    <button @click="$store.commit('updateUsername','里斯')">change username</button>
  </div>
</template>

```

### actions
------

actions在Vuex中用于执行异步操作,当异步操作执行完成以后可以调用commit方法触发mutation来修改应用状态

------

```js
export default createStore({
    actions:{
        updateName(ctx){
            setTimeout(() => {
                ctx.commit('updateName','里斯')
            },1000)
        }
    }
});
```

```vue
<script>
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore();

    const onClickHandler = () => {
      store.dispatch('updateName');
    }
    return{
      onClickHandler
    }
  }
}
</script>
```

```vue
<template>
  <div>
    <button @click="onClickHandler">button</button>
  </div>
</template>
```

### module
#### 概述
Vuex允许开发者通过模块对状态进行拆分,允许开发者将不同功能的状态代码拆分到不同的模块中

模块分为两种,一种是不具备命名空间的模块,另一种是具备命名空间的模块,推荐使用命名空间,命名空间使模块更加独立

#### 非命名空间模块
```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    state(){
        return{
            name: '模块A'
        }
    }
}

const moduleB = {
    state(){
        return{
            name: '模块B'
        }
    }
}

export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
  <div>
    {{$store.state['a'].name}}
    {{$store.state['b'].name}}
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default{
  setup(){
    const store = useStore();
    console.log(store.state.a.name);
    console.log(store.state.b.name);
  }
}
</script>
```

------

非命名空间模块中的mutation方法,当`updateName`方法被触发后,所有定义此方法的模块都会调用该方法
```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    mutations:{
        updateName(state){
            state.name = '😈模块A😈'
        }
    }
}

const moduleB = {
    mutations: {
        updateName(state){
            state.name = '😀模块B😀'
        }
    }
}

export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
  <div>
    {{ $store.state["a"].name }}
    {{ $store.state["b"].name }}
    <button @click="$store.commit('updateName')">updateName</button>
  </div>
</template>
```

------

非命名空间模块中的`getter`,不能再两个模块中定义相同的`getter`以避免程序报错
```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    getters:{
        newName(state){
            return state.name + '😈'
        }
    }
}

const moduleB = {
    getters: {
        newName(state){
            return state.name + '😀'
        }
    }
}

export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
    {{$store.getters.newName}}
</template>
```

### 命名空间模块
------

命名空间模块需要再模块对象中添加`namespaced: true`选项

------

```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    namespaced: true,
    state(){
        return{
            name: '模块A'
        }
    }
}

const moduleB = {
    namespaced: true,
    state(){
        return{
            name: '模块B'
        }
    }
}

export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
  <div>
      {{$store.state['a'].name}}
      {{$store.state['b'].name}}
  </div>
</template>
```

------

具有命名空间的模块状态更加独立,如可以在不同的命令空间中定义相同的`getter`
```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    namespaced: true,
    state(){
        return{
            name: '张三'
        }
    },
    getters:{
        newName(state){
            return state.name + '😀'
        }
    }
}

const moduleB = {
    namespaced: true,
    state(){
        return{
            name: '里斯'
        }
    },
    getters:{
        newName(state){
            return state.name + '😈'
        }
    }
}

export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
  <div>
      {{$store.getters['a/newName']}}
      {{$store.getters['b/newName']}}
  </div>
</template>
```

------

在不同的命名空间模块中定义相同的变异方法
```js
//创建Store
import { createStore } from 'vuex';

const moduleA = {
    namespaced: true,
    state() {
        return {
            name: '张三'
        }
    },
    getters: {
        newName(state) {
            return state.name + '😀'
        }
    },
    mutations: {
        updateName(state) {
            state.name = '我是模块A'
        }
    }
}

const moduleB = {
    namespaced: true,
    state() {
        return {
            name: '里斯'
        }
    },
    getters: {
        newName(state) {
            return state.name + '😈'
        }
    },
    mutations: {
        updateName(state) {
            state.name = '我是模块B'
        }
    }
}


export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```vue
<template>
  <div>
      {{$store.getters['a/newName']}}
      {{$store.getters['b/newName']}}
      <button @click="$store.commit('a/updateName')">update moduleA</button>
      <button @click="$store.commit('b/updateName')">update moduleB</button>
  </div>
</template>
```

## 代理对象
------

什么是数据响应式?
数据驱动视图,即数据和视图进行绑定,当数据发生变化后,视图自动更新

------

------

如何实现数据响应式?
实现数据响应式的核心在于监听数据的变化,当数据发生变化后,执行视图更新操作

------

Vue3使用代理对象监听数据变化

创建对象的代理对象,从而实现对对象操作的拦截和自定义
```vue
<script>
export default {
    setup(){
        //person对象 源数据对象
        const person = { name: "张三" , age: 20 };
        //p 对象,person对象的代理对象
        //对 p 对象进行所有操作都会映射到 person 对象
        const p = new Proxy(person,{});
        //查询代码对象
        console.log(p);  //Proxy { name: "张三" , age: 20}
        //修改代理对象中的 name属性
        p.name = "里斯";
        //输出源数据对象中的 name 属性
        console.log(person.name);   //里斯
        //删除代理对象中的 age 属性
        delete p.age;
        //输出源数据对象中的 age 属性
        console.log(person.age);  //undefined
        //在代理对象中增加 sex 属性
        p.sex = "男";
        //输出源数据对象中的 sex 属性
        console.log(person.sex);
    }
}
</script>
```

------

```vue
<script>
export default {
  setup() {
    //person对象 , 源数据对象
    const person = {
      name: "张三",
      age: 20,
      brand: { group: { title: "宝马" } },
    };
    //p 对象 , person 对象的代理对象
    //对 p 对象进行的所有操作都会映射到 person 对象
    const p = new Proxy(person, {
      get(target, property) {
        console.log("拦截到了获取操作");
        return target[property];
      },
      set(target, property, value) {
        console.log("拦截到了设置或者新增操作");
        target[property] = value;
        return true;
      },
      deleteProperty(target, property) {
        console.log("拦截到了删除操作");
        return delete target[property];
      },
    });

    //输出源数据对象中的 name 属性
    console.log(p.name); //张三

    //修改代理对象中的 name 属性
    p.name = "李四"; 

    //删除代理对象中的 name 属性
    delete p.name;

    //修改代理对象中的 sex 属性
    p.sex = "男";

    //proxy 代理的是整个对象 , 不论对象层级有多深,都可以进行拦截
    console.log(p.brand.group.title);    //宝马

    console.log(person);   //{age: 20, brand: {…}, sex: '男'}
  },
};
</script>
```

