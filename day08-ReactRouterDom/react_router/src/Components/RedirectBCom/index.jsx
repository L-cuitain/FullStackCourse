//登录页面
import React from 'react';

class RedirectBCom extends React.Component{

    state = {
        username : '',
        pwd: ''
    }

    //
    changeIpt= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    userLogin = () => {
        console.log(this.state.username , this.state.pwd);
        //将登录数据存入本地
        var storage = window.localStorage;
        storage.setItem('user',{username:this.state.username , pwd: this.state.pwd});

        console.log(storage.getItem);
    }

    render(){
        return (
            <div>
                <input type="text" name="username" onChange={(e) => {this.changeIpt(e)}}/>
                <input type="password" name="pwd" onChange={(e) => {this.changeIpt(e)}}/>

                <button onClick={this.userLogin}>登录</button>
            </div>
        )
    }
}

export default RedirectBCom;