import React from 'react';

import '../SwitchTransitionCom/index.css';

//引入switch切换动画
import { CSSTransition , SwitchTransition } from 'react-transition-group';
 
class SwitchCom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Flag: true
        }
    }

    render(){
        return (
            <div>
                <SwitchTransition mode={'in-out'}>
                    <CSSTransition key={this.state.Flag} timeout={2000} classNames={'btn'}>
                        <button onClick={() => {this.setState({Flag: !this.state.Flag})}}>{this.state.Flag ? 'on' : 'off'}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default SwitchCom;