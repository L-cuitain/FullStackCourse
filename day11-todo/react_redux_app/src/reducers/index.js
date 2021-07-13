import { AddTask , DelTask , ChangeKey , ChangeCheck , ClearFinish } from '../constants';

const initalState = {
    list: [
        {
          id: 1,
          info: "我周六去百盟物流园 打沙包",
          status: false
        },
        {
          id: 2,
          info: "我明天下午 去操场打篮球",
          status: true
        }
      ], 
      viewKey: 'all'
}
//添加
const globalReducer = (state = initalState , action) => {
    switch(action.type){
        case AddTask:
            return {
                ...state,
                list: [...state.list,action.task]
            }
        case DelTask:
            return {
                ...state,
                list: state.list.filter(item => item.id!==action.id)
            }
        case ChangeKey:
            return {
                ...state,
                viewKey : action.key
            }
        case ChangeCheck:
            return {
                ...state,
                list: state.list.map(item => {
                    if(item.id === action.id){
                        return {...item , status: !item.status}
                    }else{
                        return item;
                    }
                })
            }    
        case ClearFinish:
            return {
                ...state,
                list: state.list.filter(item => item.status===false)
            }        
        default:
            return state;    
    }
}

export default globalReducer