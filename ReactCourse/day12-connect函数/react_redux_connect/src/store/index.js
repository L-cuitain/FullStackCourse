//引入reducers
import reducers from './reducers';

//创建store
import { createState } from 'redux';
const store = createState(reducers);

export default store;