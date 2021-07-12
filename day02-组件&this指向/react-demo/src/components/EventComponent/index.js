import React from 'react';

//类组件(有状态组件)
//类中方法通过 event获取选中元素
class EventCom extends React.Component{

    // constructor(){
    //     super();

    //     this.state = {
    //         val : ''
    //     }
    // }

    state = {
        val : ""
    }

    handleGetContent = (e)=>{
        this.setState({
            val : e.target.value
        })
        //获取挂载文本框的内容
        console.log(this.state.val);
    }

    //挂载
    render(){
        return(<input onChange={this.handleGetContent} value={this.state.val}/>)
    }
}

//导出
export default EventCom;