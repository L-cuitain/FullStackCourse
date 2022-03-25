import React from 'react';
//引入css模块
import StyleModule from './index.module.css';

class StyleCom extends React.Component{
    render(){
        return (
            <React.Fragment>
                {/* 行内样式 */}
                <div style={{backgroundColor: 'red',width: '100px' , height: '200px'}}></div>
                {/* css模块使用 */}
                <span></span> 
            </React.Fragment>
               
        )
    }
}

export default StyleCom;