import {
    SAVE_SECRET
} from '../contants';

//初始化数据
const initalState = {
    secret: new Date().toString()
}

//创建reducer
const reducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case SAVE_SECRET:
            return {
                secret: action.secret
            }
            default:
                return state
    }
}

export default reducer;