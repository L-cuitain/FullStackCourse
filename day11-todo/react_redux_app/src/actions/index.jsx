//引入constants
import { AddTask , DelTask , ChangeKey , ChangeCheck , ClearFinish } from '../constants';

//添加
export const AddAction = (task) => {
    return {
        type: AddTask,
        task: task
    }
}

//删除
export const DelAction = (id) => {
    return{
        type: DelTask,
        id : id
    }
}

//改变选中状态
export const ChangeCheckAction = (id) => {
    return {
        type: ChangeCheck,
        id : id
    }
}

//改变状态
export const ChangeAction = (key) => {
    return {
        type: ChangeKey,
        key : key
    }
}

//清除已完成
export const ClearAction = () => {
    return {
        type: ClearFinish
    }
}


