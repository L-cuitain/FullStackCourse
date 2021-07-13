import React from 'react';
import './App.css';

//引入组件
import TodoList from '../TodoList';
//引入 react-redux
import { Provider } from 'react-redux';

//引入redux 创建store
import { createStore } from 'redux';

//引入reducers
import globalReducer from '../../reducers';
const store = createStore(globalReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}

export default App;