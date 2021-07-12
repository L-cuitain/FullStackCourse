import React from 'react';

//引入cssTransition 
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './index.module.css'

class TransitionCCom extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            flag: true
        }
    }

    render() {
        return (
            <div>
                <SwitchTransition mode={'in-out'}>
                    <CSSTransition key={this.state.flag} timeout={2000}  classNames={'btn'}>
                        <button onClick={() => {this.setState({flag: !this.state.flag})}}>{this.state.flag ? "on":"off"}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default TransitionCCom;