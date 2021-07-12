import React from 'react';

//类组件(有状态组件)
//定义一个类 在这个类中实现render方法 在render方法中返回组件的结构
class classCom extends React.Component{
    constructor(){
        super();

        this.state = {
            count : 10
        }
    }

    handleClick = () => {
       console.log(this.state.count);
    }

    render(){
        return(<div onClick={this.handleClick}>点我</div>)    
    }
}


export default classCom