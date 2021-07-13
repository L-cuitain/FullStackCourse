import React from 'react';
import './App.css';
import FaCom from '../components/FaCom';
import SoCom from '../components/SoCom';
import { Provider } from '../utils/context';

class App extends React.Component{
  state = {
    faStr : 111,
    soStr : "子组件",
    FaName: '',
    FaMsg : ''
  }

  //父组件声明方法 接受子组件传入的值
  handleClick = (name , msg) => {
    console.log(name , msg);
    this.setState({
      FaName: name,
      FaMsg : msg
    })
  }

  render(){
    return (
      <Provider value="火车王爱上火车王">
      <div className="app">
        <FaCom newStr={this.state.faStr} SoMsg={this.state.FaMsg}></FaCom>
        <SoCom soStr={this.state.soStr} handleClick={this.handleClick} ></SoCom>
      </div>
      </Provider>
    )
  }
}

export default App;
