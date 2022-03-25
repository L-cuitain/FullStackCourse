//封装axios
import axios from 'NuxtJSCourse/day04-Store/nuxt_list_info/plugins/axios';

//导出方法
export default(context,inject) => {
    //设置基准地址
    axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

    //注入插件
    inject('api',{
        /**
         * 加载列表
         * @param {String} path 路径
         * @returns Promise
         */
        getTopics(path){
            return axios.get(path);
        },

        /**
         * 加载列表详情
         * @param {String} path 路径
         * @returns Promise
         */
        getTopicsDetail(path){
            return axios.get(path);
        }
    })
}
