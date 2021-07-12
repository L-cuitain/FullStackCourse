import React from 'react';

class ClassCom extends React.Component{
    //设置state中的参数
    state = {
        count: 0
    }
    //创建点击事件 修改state中的参数值  this.setState({})
    handleAdd = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    //挂载
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleAdd}>点我</button>
            </div>
        )
    }
}

export default ClassCom