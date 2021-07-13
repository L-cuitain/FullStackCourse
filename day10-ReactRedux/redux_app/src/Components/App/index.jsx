import React from 'react';
import './App.css';
import store from '../../Store/store';
//引入action
import { addAction , subAction } from '../../Store/action';

class App extends React.Component{

  //获取store公共域中的数据
  state = store.getState();

  //注册监听器 让视图的内容可以改变
  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        count : store.getState().count
      })
    })
  }

  //加
  handleAdd = () => {
    //通过store的dispatch将指定action绑定 进而更新state
    store.dispatch(addAction());
  }

  //减
  handleMin = () => {
    //通过store的dispatch将指定的action绑定 进而更新state
    store.dispatch(subAction());
  }

  render(){
    return (
      <div className='App'>
        <p>数字: {this.state.count}</p>
        {/* + - 按钮 点击事件 */}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMin}>-</button>
      </div>
    )
  }
}

export default App;
