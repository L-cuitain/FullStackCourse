import React from 'react';

//属性代理方式
//属性代理是最常见的实现方式 它本质上是使用组合的方式 通过将组件包装容器组件中实现功能
//属性代理方式实现的高阶组件和原组件的生命周期关系完全是React父子组件的生命周期关系 所以该方式实现的高阶组件会影响原组件某些生命周期等方法


//返回一个无状态函数组件
// function HOC(WrappedComponent){
//     const newProps = {type: 'HOC'};
//     return props => <WrappedComponent {...props} {...newProps}/>
// }


//返回一个有状态class组件
function HOC(WrappedComponent){
    return class extends React.Component{

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
}

//通过属性代理方式实现高阶组件包装后的组件可以拦截到父组件传递过来的props 提前对props进行一些操作 比如增加一个type属性



export default HOC