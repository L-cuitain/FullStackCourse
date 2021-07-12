import React , {Fragment} from 'react';
import './App.css';

class AppUpdate extends React.Component{

  constructor(){
    super();
    this.state = {
      num: 20
    }

    console.log("子组件挂载 -> constructor 初始化state 事件绑定this");
  }

  componentDidUpdate(){
    console.log("子组件更新 -> componentDidUpdate 发送请求 DOM操作");
  }

  componentWillUnmount(){
    console.log("子组件卸载 -> componentWillUnmount 清理数据 停定时器 解绑事件");
  }

  render(){
    console.log("子组件更新 -> 更新props");
    return (
      <div>我是子组件---{this.props.getNum}</div>
    )
  }
}


//组件挂载 执行顺序: constructor -> render -> componentDidMount
//组件更新 执行顺序: render -> componentDidUpdate
//组件卸载 执行顺序: componentWillUnmount 
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      num : 10,
      flag: true
    }

    console.log("根组件挂载 -> constructor 初始化state");
  }

  

  componentDidMount(){
    console.log("根组件挂载 -> 调用componentDidMount  发起请求 DOM操作");
  }


  componentDidUpdate(prevProps , prevState){
    console.log(prevState);
    console.log("根组件更新 -> componentDidUpdate 发送请求 DOM操作");
  } 
  

  componentWillUnmount(){
    console.log("根组件卸载 -> componentWillUnmount 清理数据 停定时器 解绑事件");
  }

  handleChangeNum= ()=>{
    this.setState({
      num : 20,
      flag : false
    })
  }

  render(){
    console.log("根组件挂载 -> render  New props 新增props属性值 setState() 修改state值  forceUpdate() 强制更新")
    return (
      <Fragment>
        <button onClick={this.handleChangeNum}>点我</button>
        {this.state.flag && <AppUpdate getNum={this.state.num}/>}
      </Fragment>
    )
  }
}


export default App;
