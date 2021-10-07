//定义 state
export const state = () => ({
    list: [10,20,40]
})

//定义 mutations
export const mutations = {
    add(state,payload){
        state.list.push(payload);
    }
}
