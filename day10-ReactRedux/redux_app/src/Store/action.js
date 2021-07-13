//action层 在方法中通过dispatch传递action 从reducer中判断action的类型 来执行相应的方法

import { ADD_COUNT , SUB_COUNT} from './constants';

export const addAction = () => {
    return {
        type: ADD_COUNT
    }
}

export const subAction = () => {
    return {
        type: SUB_COUNT
    }
}