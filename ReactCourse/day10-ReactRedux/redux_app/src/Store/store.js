//store层 创建store并将reducer绑定

//引入redux包
import { createStore } from 'redux';
//引入reducer
import reducer from './reducer';

//创建store
const store = createStore(reducer);

//导出store
export default store;
