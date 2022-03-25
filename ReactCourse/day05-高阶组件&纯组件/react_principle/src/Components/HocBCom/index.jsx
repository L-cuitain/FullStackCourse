import React from 'react';

//封装高阶组件
const HocBCom = WrappedComponent => {
    class Mouse extends React.Component{
        state = {
            X : 0,
            Y : 0
        }

        Fn = (e)=>{
            this.setState({
                X: e.clientX,
                Y: e.clientY
            })
        }

        componentDidMount(){
            window.addEventListener('mousemove',this.Fn);
        }

        render(){
            //将要复用的状态作为 props.render(state) 方法的参数 暴露到组件外部
            return <WrappedComponent {...this.state}{...this.props}/>
        }
    }

    //约定: 包装显示名称以便轻松调用
    //给高阶组件设置名称 将来在 react-dev-tools 工具中 能够区分哪个是高阶组件包装的组件
    function getDisplayName(WrappedComponent){
        return WrappedComponent.displayName || WrappedComponent.name || 'Component'
    }

    Mouse.displayName = `Mouse(${getDisplayName(WrappedComponent)})`;

    return Mouse;
}

export default HocBCom;