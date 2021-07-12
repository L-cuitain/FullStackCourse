import React from 'react';

import '../TransitionBCom/index.css';

//引入CSSTransition动画
import { CSSTransition } from 'react-transition-group';

class TransitionBCom extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }

    btnClick = () => {
        this.setState({
            isShow : !this.state.isShow
        })
    }

    enterFn = (currentEL , isAppear) => {
        console.log(currentEL , isAppear);
        console.log("进入动画开始之前");
    }

    render(){
        return(
            <div>
                {/* 生命周期方法 */}
                {/* onEnter/onEntering/onEntered */}
                {/* onExit/onExiting/onExited */}
                <CSSTransition unmountOnExit in={this.state.isShow} classNames={'nioxs'} timeout={1000} appear onEnter = {this.enterFn} onEntering={() => {console.log("进入动画执行过程中");}} onEntered={() => {console.log('进入动画执行完毕')}}>
                    <div></div>
                </CSSTransition>
                <button onClick={this.btnClick}>显示</button>
                <button onClick={this.btnClick}>隐藏</button>
            </div>
        )
    }
}

export default TransitionBCom;