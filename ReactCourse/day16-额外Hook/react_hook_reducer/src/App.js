import { useReducer } from 'react';

import reducer from './reducer';


function App() {
  //通过useReducer获取状态管理中的state值
  const [state , dispatch] = useReducer(reducer,{count: 0});

  return (
    <div className="App">
      <h1>{state.count}</h1> 
      <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
    </div>
  );
}

export default App;
