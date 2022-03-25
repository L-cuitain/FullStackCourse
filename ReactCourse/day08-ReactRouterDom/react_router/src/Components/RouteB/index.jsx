import React from 'react';

class RouteBCom extends React.Component{

    btnClick= () => {
        //hash模式
        window.location.hash = "/login";

        //history模式
        // this.props.history.push('/login');
    }

    render(){
        return(
            <div>
                <div>这是RouteB路由</div>
                <button onClick={this.btnClick}>跳转到button</button>
            </div>
        )
    }    
}

export default RouteBCom;