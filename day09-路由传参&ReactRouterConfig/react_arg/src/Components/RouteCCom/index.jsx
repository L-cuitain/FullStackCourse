import React from 'react';

class RouteCCom extends React.Component{

    state = {
        data : ''
    }

    componentDidMount=()=>{
        console.log(this.props.location.state.data);
        this.setState({
            data : this.props.location.state.data
        })
    }

    render(){
        return (
            <div>
                <h1>RouteC: 狂笑王{this.state.data}</h1>
            </div>
        )
    }
}

export default RouteCCom;