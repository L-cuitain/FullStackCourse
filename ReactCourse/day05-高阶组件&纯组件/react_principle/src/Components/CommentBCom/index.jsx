import React from 'react';
import favicon from './233.jpg';

//调用封装的高阶组件
import HocBCom from '../HocBCom';

//创建组件 
const Img = (props)=> {
    return (
        <img src={favicon} style={{position:'absolute' , top: props.Y , left: props.X}} />
    )
}

const CommentBCom = HocBCom(Img);

export default CommentBCom;