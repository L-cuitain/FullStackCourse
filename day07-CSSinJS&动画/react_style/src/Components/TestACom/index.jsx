import React from 'react';

import {Button} from '../StyleCom';

class TestACom extends React.Component{

    state = {
        color: 'palevioletred',
        borderRadius: '3px'
    }

    render(){
        return (
            <Button color={this.state.color} border-radius={this.state.borderRadius}>点我生成派蒙</Button>
        )
    }
}

export default TestACom;