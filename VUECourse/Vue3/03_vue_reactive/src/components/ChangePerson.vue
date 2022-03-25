<template>
  <div>
      {{person.name}}
      {{person.age}}

      <button @click="onClickHandler">button</button>
  </div>
</template>

<script>
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
</script>

<style>

</style>