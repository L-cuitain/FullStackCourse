import React from 'react';

import SonCom from '../SonCom';

//Portals 

class PortalsCom extends React.Component{

    state = {
        count: 1
    }

    btnClick = () => {
        this.setState({
            count: 10
        })
    }

    render(){
        return (
            <div>
                <p>count: {this.state.count}</p>
                <button onClick={this.btnClick}>点我</button>
                <SonCom>
                    <h1>Protals传递的子组件</h1>
                </SonCom>
            </div>
        )
    }
}

export default PortalsCom;