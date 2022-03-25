// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import axios from "axios";
export interface State {
    list: Array<object>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        //列表
        list: [],
    },
    mutations: {
        //初始化数据
        initData(state , payload) {
            state.list = payload;
        } 
    },
    actions: {
        //通过异步获取数据
        async getTodoList(context) {
            let list = await axios.get("./list.json");
            context.commit('initData', list.data);
        }
    },
    getters: {
        //计算列表的个数
        todoScore(state){
            let data = state.list.filter(item => (item as any).done === false);
            return data.length;
        }
    }
})

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key)
}