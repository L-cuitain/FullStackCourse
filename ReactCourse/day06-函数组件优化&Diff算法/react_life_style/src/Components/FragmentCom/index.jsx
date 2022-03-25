import React , {Fragment} from 'react';

//Fragment写法
class FragmentCom extends React.Component{
    render(){
        //写法一: <Fragment></Fragment>
        // return (
        //     <Fragment>
        //         <div>1232123</div>
        //     </Fragment>
        // )   

        //写法二: <React.Fragment></React.Fragment>
        // return (
        //     <React.Fragment key={item.id}>
        //         <div>1123123</div>
        //     </React.Fragment>
        // )

        //写法三: <></> 无法添加 key属性
        return (
            <>
                <li>滑稽</li>
                <li>火车王</li>
                <li>快乐火车王</li>
                <li>伤心火车王</li>
            </>
        )
    }
}

export default FragmentCom;