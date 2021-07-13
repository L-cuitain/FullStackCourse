import React from 'react';

class RouteBCom extends React.Component{

    state = {
        password : ''
    }

    componentDidMount = () => {
        console.log(this.props);

        this.setState({
            password: this.props.match.params.id
        })
    }

    render(){
        return(
            <div>
                <h1>路由B: 滑稽王</h1>
                <h2>{this.state.password}</h2>
            </div>  
        )
    }
}

export default RouteBCom;