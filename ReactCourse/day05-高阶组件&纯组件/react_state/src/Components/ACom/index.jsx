import React from 'react';

class AppSon extends React.Component {

    state = {
        count: 0
    }

    appSonClick = () => {
        this.setState({
            count: 1
        })
    }

    render() {
        console.log("AppSon组件更新")
        return (
            <div>
                <h3>我是App的儿子组件</h3>
                <p></p>
                <button onClick={this.appSonClick}>点我更新AppSon组件的状态</button>
                <AppGrandeSon count={this.state.count}></AppGrandeSon>
            </div>
        )
    }
}
// class AppGrandeSon extends React.PureComponent {
class AppGrandeSon extends React.PureComponent {

    // nextProps(最新的props) nextState(最新的state的值)
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps.count);
    //     console.log(this.props.count);
    //     // 如果props变化了 state变化了
    //     return nextProps.count !== this.props.count
    // }

    render() {
        console.log("AppGrandeSon组件更新")
        return (
            <div>
                <h3>我是App的孙子组件</h3>
                <p>{this.props.count}</p>

            </div>
        )
    }
}

class AppDaughter extends React.Component {
    render() {
        console.log("AppDaughter组件更新")
        return (
            <div>
                <h3>我是App的姑娘组件</h3>
                <p></p>

            </div>
        )
    }
}

//创建 类组件
class ACom extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.timerId = 1235423432
    }


    appClick = () => {
        this.setState({
            count: 1
        })

        console.log(this.timerId)
    }

    render() {
        console.log("App组件更新")
        return (
            <div>
                <h3>我是App组件</h3>
                <p></p>

                <button onClick={this.appClick}>点我更新App组件的状态</button>

                <AppSon></AppSon>
                <AppDaughter></AppDaughter>
            </div>
        )
    }
}

export default ACom;