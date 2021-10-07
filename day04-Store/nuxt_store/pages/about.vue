<template>
  <div>
     <h1>vuex 分模块演示</h1>
     <h3>index模块中的随机数:{{ $store.state.randomNum }}</h3>
     <h3>todolist模块中的数组:{{ $store.state.todolist.list}}</h3>
     <button @click="increment">新增随机数</button>
  </div>
</template>

<script>
export default {
    methods:{
        increment(){
            //随机数存入vuex中
            const randomNum = this.getRandom(10,30);
            this.$store.commit('setNum',randomNum);
            this.$store.commit('todolist/add',randomNum);
        },

        //返回随机数
        getRandom(min,max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}
</script>

<style>

</style>