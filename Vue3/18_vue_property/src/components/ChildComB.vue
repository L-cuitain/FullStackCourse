<template>
  <div>ChildComB 组件</div>
</template>

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

<style>
</style>