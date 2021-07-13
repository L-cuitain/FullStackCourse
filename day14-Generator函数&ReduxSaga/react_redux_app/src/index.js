import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import mySaga from './sagas';
//创建store
import { createStore , applyMiddleware } from 'redux';
import reducer from './reducer';

//引入redux-saga
import createSagaMiddleware from 'redux-saga';

//获取Provider
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer , applyMiddleware(sagaMiddleware));

//run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

