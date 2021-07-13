//引入contants
import { GET_PROVINCE , GET_CITY , GET_COUNTY } from '../contants/contants';

//创建reducer层 获取数据

//创建初始化数据
const initalState = {
    //省级列表
    provinceList: [],
    //市级列表
    cityList: [],
    //区县列表
    countyList: []
}

const reducer = (state=initalState , action) => {
    switch(action.type){
        case GET_PROVINCE:
            return {
                ...state,
                provinceList: action.PList,
                cityList:[],
                countyList:[]
            }
        case GET_CITY:
            return {
                ...state,
                cityList: action.CList,
                countyList:[]
            }
        case GET_COUNTY:
            return {
                ...state,
                countyList: action.TList
            }    
        default:
            return state;
    }
}

export default reducer;