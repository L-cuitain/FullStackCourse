//引入cookieparser
const cookieparser = require('cookieparser');

//引入 state
export const state = () => ({
    auth: null
})

//引入 mutations
export const mutations = {
    //设置Auth
    setAuth(state,payload){
        state.auth = payload
    }
}

//设置 actions
export const actions = {
    //创建nuxtServerInit方法
    nuxtServerInit({commit},{req}){
        console.log('nuxtServerInit执行了');
        //重新设置auth
        let auth = null;
        //判断cookie是否存在
        if(req.headers.cookie){
            console.log(req.headers.cookie,'req.headers.cookie');
            auth = cookieparser.parse(req.headers.cookie);
            commit('setAuth',auth);
        }
    }
}