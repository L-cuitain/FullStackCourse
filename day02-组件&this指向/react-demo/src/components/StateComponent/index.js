import React from 'react';

//修改state

class StateCom extends React.Component{
    //定义state
    state = {
        content : '滑稽'
    }

    handleClick = ()=>{
        this.setState({
            content : 'asxfas'
        })
    }

    render(){
        return (
            <div>
            <p>{this.state.content}</p>
            <button onClick={this.handleClick}>点我</button>
            </div>
        )
    }

}

export default StateCom;