import React from 'react';
import Styled from 'styled-components';

//创建组件 封装一个包含样式的标签
const StyleDiv = Styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background: skyblue;
    opacity: ${props=>props.opacity};
    transition: all 3s;
`

class TransitionACom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            width: 0,
            height: 0,
            opacity: 0
        }
    }

    btnClick = () => {
        this.setState({
            width: '100px',
            height: '100px',
            opacity: 1
        })
    }

    render(){
        return(
            <div>
                <StyleDiv width={this.state.width} height={this.state.height} opacity={this.state.opacity}></StyleDiv>
                <button onClick={this.btnClick}>点我</button>
            </div>
        )
    }
}

export default TransitionACom;