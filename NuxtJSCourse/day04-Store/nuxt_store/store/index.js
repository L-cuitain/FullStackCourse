//定义 state
export const state = () => ({
    count: 0,
    topics: [],
    randomNum: 0
})

//定义 mutations
export const mutations =  {
    //增加count值
    increment(state,payload){
        state.count += payload;
    },

    //list列表数据
    setTopics(state,payload){
        state.topics = payload;
    },
    
    //
    setNum(state,payload){
        state.randomNum = payload;
    }
}

//定义 actions
export const actions = {      
    //异步增加count值
    asyncIncrement({commit},payload){
        //创建定时器 向同步方法increment传递参数
        setTimeout(() => {
            commit('increment',payload)
        },1000)
    }
}