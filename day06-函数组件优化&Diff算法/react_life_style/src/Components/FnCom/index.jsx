//函数式组件优化
import React from 'react';
//React.memo()
const FnCom = React.memo((props) => {
    console.log("FnCom组件更新");

    return (
        <div>我是: {props.name}</div>
    )
})



export default FnCom;