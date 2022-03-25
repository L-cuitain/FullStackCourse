import React , { Fragment } from 'react';

//类组件(有状态组件)
class StackCom extends React.Component{
    //初始化State
    state = {
        val: ""
    }

    handlerChange = (e) => {
        this.setState({
            val : e.target.value
        })
    }

    handlerClick= () => {
        console.log(this.state.val);
    }

    render(){
        return (
            //碎片 占位父元素
            <Fragment>
                <input value={this.state.val} onChange={this.handlerChange} />
                <button onClick={this.handlerClick}>按钮</button>
            </Fragment>
        )
    }
}

export default StackCom;