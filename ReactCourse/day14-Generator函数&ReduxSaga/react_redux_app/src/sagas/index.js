//导入redux-saga
import { takeEvery , takeLatest , put } from 'redux-saga/effects';

//导入action
import { GET_SECRET } from '../contants';
import { saveSecret } from '../action'

//发送请求 action
//保存数据 action
function* getData(){
    const data = yield fetch("http://localhost:8080/getdata").then(res => {
        console.log(res);
        return res.json();
    }).then((data) => data.quotation)

    yield put(saveSecret(data));
}

//拦截action 需要创建 generator函数(生成器函数)
export default function* mySaga(){
    //使用takeEvery 判断 action的类型
    //并进行拦截 
    yield takeEvery(GET_SECRET,getData)
}