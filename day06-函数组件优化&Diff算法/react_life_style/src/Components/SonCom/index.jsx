import React from 'react';
import ReactDOM from 'react-dom';

class SonCom extends React.Component{
    render(){
        return ReactDOM.createPortal(this.props.children , document.querySelector("#protals_root"))
    }
}

export default SonCom;