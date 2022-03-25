//引入axios
import axios from 'NuxtJSCourse/day03-过渡动画&插件/nuxt_plugin/plugins/axios';

//封装axios
export default (context,inject) => {
    //设置基准地址
    axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
    inject('api',{
        getTopics(path){
            return axios.get(`${[path]}`)
        }
    })
}
