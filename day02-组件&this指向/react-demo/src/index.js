import React from 'react';
import ReactDOM from 'react-dom';

//引入组件
// import FnCom from './components/FnComponent';
// import ClassCom from './components/ClassComponent/class';
// import EventCom from './components/EventComponent';
// import StateCom from './components/StateComponent';
import StackCom from './components/StackComponent';

ReactDOM.render(
  <StackCom />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
