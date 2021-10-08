//定义 state
export const state = () => ({
    topics: []
})

//定义 mutations
export const mutations = {
    //设置topics的值
    setTopics(state,payload){
        state.topics = payload;
    }
}


//定义 actions
export const actions = {

}