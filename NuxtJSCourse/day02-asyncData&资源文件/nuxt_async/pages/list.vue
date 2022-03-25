<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id"><a href="#">{{item.title}}</a></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // 原生
    // asyncData(){
    //     return axios.get('https://cnodejs.org/api/v1/topics').then(res => {
    //         return{
    //             list: res.data.data
    //         }
    //     })
    // }

    //使用 async await
    async asyncData(){
        const { data:{data:topics} } = await axios.get('https://cnodejs.org/api/v1/topics');
        return{
            list: topics
        }
    }
}
</script>

<style>

</style>