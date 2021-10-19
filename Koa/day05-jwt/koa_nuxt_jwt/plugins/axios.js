//引入axios
import axios from 'axios';

//拦截axios 将获取的token存入headers中
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = 'Bearer ' + token;
    console.log(config);
    return config;
})