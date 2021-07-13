import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './Components/App/App';

//引入redux包 创建store
import { createStore } from 'redux';
//引入reducer
import reducer from './Reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

