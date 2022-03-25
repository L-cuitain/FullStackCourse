<template>
  <div id="app">
    <div class="container">
      <div class="cart">
        <CartTitle></CartTitle>
        <CartList :cart-item="cartItems" @change-num="changeNum"  @del="delItem"></CartList>
        <CartTotal :cart-total="sumTotal"></CartTotal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//引入vue 使用vue中定义组件的方法 defineComponent
import { defineComponent, reactive , computed} from "vue";
import CartList from "./components/CartList/index.vue";
import CartTitle from "./components/CartTitle/index.vue";
import CartTotal from "./components/CartTotal/index.vue";
import "./types/CartItem";
// import img from "./assets/img/b.jpg";
export default defineComponent({
  
  name: "App",
  setup() {

    //定义商品数据
    const cartItems:Array<CartItem> = reactive([
      {
        id: 1,
        name: "火车王",
        img: "./img/a.jpg",
        price: 1000,
        num: 1,
      },
      {
        id: 2,
        name: "王火车",
        img: "./img/b.jpg",
        price: 1000,
        num: 1,
      },
      {
        id: 3,
        name: "车火王",
        img: "./img/c.jpg",
        price: 1000,
        num: 2,
      },
    ]);

    //删除方法
    const delItem = function(id){
      const resultIndex = cartItems.findIndex((item) => {
        return item.id == id;
      })

      cartItems.splice(resultIndex,1);
    }

    //更改数量方法
    const changeNum = function(id , target , num){
      console.log(target);
      
      cartItems.find((item) => {
        if(item.id == id){
          if(target === 'change'){
            item.num = num;
            return true;
          }
          if(target === 'add'){
            item.num++;
            return true;
          }
          if(target === 'remove'){
            item.num--;
            if(item.num <= 0){
              item.num = 0;
            }
            return true;
          }
        }
      })
    }

    //计算总价格
    const sumTotal = computed(() => {
        let sum = 0;
        cartItems.forEach((item) => {
          sum += item.price * item.num;
        });
        return sum;
    })

    //返回
    return{
      cartItems,
      sumTotal,
      delItem,
      changeNum
    }
  },

  components: {
    CartList,
    CartTitle,
    CartTotal,
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}

.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}

.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}

.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>
