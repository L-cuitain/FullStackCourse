import React , { Fragment } from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      count: 0
    }
  }

  //绑定点击事件
  handleClick = () => {
    //setState为异步 当同时修改一个值时 异步执行后只会修改最后一次更改的值 并且值不会增长多次
    // this.setState({
    //   count: this.state.count+1
    // })

    // this.setState({
    //   count: this.state.count+1
    // })

    // this.setState({
    //   count: this.state.count+5
    // })

    //两个参数
    this.setState((state) => {
      return {
        count: state.count+1
      }
    },() => {
      console.log("立即执行");
    })
  }


  //挂载
  render(){
    return(
      <Fragment>
        <p>我是第{this.state.count}个火车王</p>
        <button onClick={this.handleClick}>点我增加火车王</button> 
      </Fragment>
    )
  }
}

export default App;
