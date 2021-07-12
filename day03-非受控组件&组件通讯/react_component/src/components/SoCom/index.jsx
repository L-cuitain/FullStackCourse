import React , {Fragment} from 'react';
//导入propTypes
import propTypes from 'prop-types';

import { Consumer } from '../../utils/context';

//类组件通信
class SoCom extends React.Component{
    
    state = {
        SoName: '火车王'
    }

    //类组件的props声明默认值
    static defaultProps = {
        soStr : "我也蚌埠住了"
    }

    //类组件规定props传入参数类型
    static propTypes = {
        soStr : propTypes.number
    }

    render(){
        return(
            <Fragment>
                {/* 类组件传值 this.props */}
                <h2>我是{this.props.soStr}</h2>
                <button onClick={() => { this.props.handleClick(this.state.SoName,'要打败火车王')}}>点我传给父组件</button>
                <Consumer>
                    {
                        (data) => (<strong>{data}</strong>)
                    }
                </Consumer>
            </Fragment>
        )
    }
}


export default SoCom;