import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { getSecret } from '../../action';

class App extends React.Component{
  render(){
      const { globalState , changeSecret } = this.props;
    return(
      <div>
        <h1>{ globalState.secret }</h1>
        <button onClick={changeSecret}>点我</button>
      </div>
    )
  }
}

//映射数据
const mapStateToProps = (state) => {
  return {
    globalState: state
  }
}

//映射方法
const mapDispatchToProps = (dispatch) => {
  return {
    changeSecret(){
      dispatch(getSecret());
    }
  }
}

//将数据和方法 与 组件绑定
export default connect(mapStateToProps,mapDispatchToProps)(App);
