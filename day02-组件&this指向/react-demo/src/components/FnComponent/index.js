import React from 'react';

//函数式组件(无状态组件)
function getData(){
    //在构造函数中返回组件的结构
    const handlerClick = function(){
        //打印结果为 undefined
        console.log(this.state);
        console.log(this);
    }

    return(
        <div onClick={handlerClick}>点我</div>
    )
}


export default getData;