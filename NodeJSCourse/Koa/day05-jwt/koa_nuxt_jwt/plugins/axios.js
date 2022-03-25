//引入axios
import axios from 'NodeJSCourse/Koa/day05-jwt/koa_nuxt_jwt/plugins/axios';

//拦截axios 将获取的token存入headers中
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = 'Bearer ' + token;
    console.log(config);
    return config;
})
