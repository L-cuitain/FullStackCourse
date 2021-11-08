<template>
  <div>
      ChileComA 组件
  </div>
</template>

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

<style>

</style>