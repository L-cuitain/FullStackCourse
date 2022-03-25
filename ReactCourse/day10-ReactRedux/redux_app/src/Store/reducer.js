//reducer层 通过判断action的类型 来执行相应的结果

//引入判断的类型
import { ADD_COUNT , SUB_COUNT } from './constants';
//创建初始化数据
const inititalState = {
    count: 0
}

//创建reducer函数
//state默认为initalState中的数据
const reducer = (state=inititalState,action) => {
    //switch判断类型
    switch(action.type){
        case ADD_COUNT:
            return {count: state.count+1}
        case SUB_COUNT:
            return {count: state.count-1}
        default:
            return state        
    }
}

export default reducer;
