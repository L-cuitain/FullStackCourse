//用户界面
import React from 'react';

//引入 redirect
import { Redirect } from 'react-router-dom';

class RedirectACom extends React.Component{
    
    render(){
        if(window.localStorage.getItem('user') === null){
            return <Redirect to="/login"/>
        }else{
            return (
                <div>
                    <h1>用户界面</h1>
                    <h2>滑稽</h2>
                </div>
            )
        }

        
    }
}

export default RedirectACom;