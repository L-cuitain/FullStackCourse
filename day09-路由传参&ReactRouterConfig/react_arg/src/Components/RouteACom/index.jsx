import React from 'react';

class RouteACom extends React.Component{
    
    state = {
        name: '',
        age: '',
        hobby: []
    }

    componentDidMount = () => {
        // console.log(this.props.location.search);
        //创建1UrlSearchUrl对象获取get请求后的参数
        const Params = new URLSearchParams(this.props.location.search);
        //获取GET请求参数 get 获取一个
        const name = Params.get('name');
        //获取GET请求参数 getAll 获取所有 返回一个数组
        const hobbies = Params.getAll('hobby');
        console.log(name , hobbies);

        //设置状态值
        this.setState({
            name: Params.get('name'),
            age: Params.get('age')
        })
    }

    render(){
        return (
            <div>
                <h1>路由A:火车王</h1>
                <h2>{`${this.state.name} -> ${this.state.age}`}</h2>
            </div>
        )
    }
}

export default RouteACom;