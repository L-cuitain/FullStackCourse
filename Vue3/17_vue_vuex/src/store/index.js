//创建Store
import {
    createStore
} from 'vuex';

// export default createStore({
//     state: {
//         username: "张三"
//     },
//     getters:{
//         newUsername(state){
//             return state.username + "😈😈😈😈"
//         }
//     },
//     mutations:{
//         updateUsername(state,username){
//             state.username = username;
//         }
//     },
//     actions:{
//         updateName(ctx){
//             setTimeout(() => {
//                 ctx.commit('updateName','里斯')
//             },1000)
//         }
//     }
// });

// const moduleA = {
//     state(){
//         return{
//             name: '模块A'
//         }
//     }
// }

// const moduleB = {
//     state(){
//         return{
//             name: '模块B'
//         }
//     }
// }

// const moduleA = {
//     mutations:{
//         updateName(state){
//             state.name = '😈模块A😈'
//         }
//     }
// }

// const moduleB = {
//     mutations: {
//         updateName(state){
//             state.name = '😀模块B😀'
//         }
//     }
// }

// const moduleA = {
//     getters:{
//         newName(state){
//             return state.name + '😈'
//         }
//     }
// }

// const moduleB = {
//     getters: {
//         newName(state){
//             return state.name + '😀'
//         }
//     }
// }

// const moduleA = {
//     namespaced: true,
//     state(){
//         return{
//             name: '模块A'
//         }
//     }
// }

// const moduleB = {
//     namespaced: true,
//     state(){
//         return{
//             name: '模块B'
//         }
//     }
// }

// const moduleA = {
//     namespaced: true,
//     state(){
//         return{
//             name: '张三'
//         }
//     },
//     getters:{
//         newName(state){
//             return state.name + '😀'
//         }
//     }
// }

// const moduleB = {
//     namespaced: true,
//     state(){
//         return{
//             name: '里斯'
//         }
//     },
//     getters:{
//         newName(state){
//             return state.name + '😈'
//         }
//     }
// }

const moduleA = {
    namespaced: true,
    state() {
        return {
            name: '张三'
        }
    },
    getters: {
        newName(state) {
            return state.name + '😀'
        }
    },
    mutations: {
        updateName(state) {
            state.name = '我是模块A'
        }
    }
}

const moduleB = {
    namespaced: true,
    state() {
        return {
            name: '里斯'
        }
    },
    getters: {
        newName(state) {
            return state.name + '😈'
        }
    },
    mutations: {
        updateName(state) {
            state.name = '我是模块B'
        }
    }
}


export default createStore({
    modules: {
        a: moduleA,
        b: moduleB
    }
})