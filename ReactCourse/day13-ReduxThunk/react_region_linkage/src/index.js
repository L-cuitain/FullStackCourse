import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//引入react-redux
import { Provider } from 'react-redux';

//创建store
//action只能处理对象 无法处理函数 
//使用redux-thunk中间件原因: 让action可以接收函数
//applyMiddleware 中间件 可以把一个方法挂到redux
import { createStore , applyMiddleware } from 'redux';
//引入reducers
import reducers from './reducers/reducer';
//引入redux-thunk
import thunkMiddleware from 'redux-thunk';
//将thunkMiddleware挂到 applyMiddleware 并返回
const storeEnhancer = applyMiddleware(thunkMiddleware);

//把reducer链接好的store放到createStore中创建store
const store = createStore(reducers,storeEnhancer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
