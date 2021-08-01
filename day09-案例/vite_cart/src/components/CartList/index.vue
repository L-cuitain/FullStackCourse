<template>
  <!-- 列表 -->
  <div>
    <div class="item" v-for="item in cartItem" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{item.name}}</div>
      <div class="change">
        <a href="#" @click="handleMinxItem(item.id)">－</a>
        <input type="text" class="num" :value="item.num" @blur="handleChangeItem($event,item.id)"/>
        <a href="#" @click="handleAddItem(item.id)">＋</a>
      </div>
      <div class="del" @click="handleDeleteItem($event,item.id)">×</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "CartList",
    props: {
        cartItem: {
            type: Array,
            required: true
        }
    },
    setup(props,{emit}){
        const handleDeleteItem = function(event: MouseEvent , id:number){
            emit('del',id);
        }

        const handleChangeItem = function(event:any , id:number){
            let result = event.target.value;
            console.log(event.target.value);
            emit('change-num',id ,'change', result);
        }

        const handleAddItem = function(id:number){
            
            emit('change-num',id ,'add');
        }

        const handleMinxItem = function(id:number){
            emit('change-num',id,'remove');
        }
        
        return{
            handleDeleteItem,
            handleChangeItem,
            handleAddItem,
            handleMinxItem
        }
    }
});
</script>

<style>
</style>