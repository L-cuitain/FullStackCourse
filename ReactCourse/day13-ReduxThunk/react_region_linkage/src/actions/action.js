//引入contants
import { GET_PROVINCE , GET_CITY , GET_COUNTY } from '../contants/contants';

//创建action
//将后台获取的省级列表传递给reducer
const provinceAction = (list) => {
    return {
        type : GET_PROVINCE,
        PList: list
    }
}

//将后台获取的市级列表传递给reducer
const cityAction = (list) => {
    return {
        type : GET_CITY,
        CList: list
    }
}

//将后台获取的区县列表传递给reducer
const countyAction = (list) => {
    return {
        type: GET_COUNTY,
        TList: list
    }
}

//获取后台省级action
export const getProvinceAction = (dispatch) => {
    fetch('http://localhost:8080/getProvince')
    .then(response => response.json())
    .then(json => dispatch(provinceAction(json.PList)))
}

//获取后台市级action
export const getCityAction = (code) => {
    return function(dispatch){
        fetch(`http://localhost:8080/getCity/${code}`)
        .then(response => response.json())
        .then(json => dispatch(cityAction(json.CList)))
    }
}

//获取后台区县action
export const getCountyAction = (code) => {
    return function(dispatch){
        fetch(`http://localhost:8080/getCounty/${code}`)
        .then(response => response.json())
        .then(json => dispatch(countyAction(json.TList)))
    }
}