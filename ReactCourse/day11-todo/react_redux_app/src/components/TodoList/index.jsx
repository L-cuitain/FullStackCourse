import React from 'react';
//引入connect
import { connect } from 'react-redux';
//引入actin
import { AddAction , DelAction , ChangeCheckAction , ChangeAction , ClearAction } from '../../actions';

class App extends React.Component {

    state = {
        iptVal : ''
    }

    //改变文本框内容
    changeIpt = (e) => {
        this.setState({
            iptVal: e.target.value
        })
    }

    //添加事项
    addTodo = () => {
        //创建新的标签事项
        let task = {
            id: new Date().valueOf(),
            info: this.state.iptVal,
            status: false
        }
        //将操作传给reducers
        this.props.dispatch(AddAction(task))

        //清空文本框
        this.setState({
            iptVal : ''
        })
    }

    //删除事项
    delTodo = (id) => {
        this.props.dispatch(DelAction(id));
    }

    //改变选中状态
    changeCheck = (id) => {
        this.props.dispatch(ChangeCheckAction(id));
    } 

    //改变状态
    changeViewKey = (key) => {
        this.props.dispatch(ChangeAction(key));
    }

    //清除已完成
    clearFinish = () => {
        this.props.dispatch(ClearAction());
    }

    render() {
        const { globalState } = this.props;
        return (
            <div className="App todo" >
                {/* 输入框及搜索按钮 */}
                < div className="todo-header" >
                    <input type="text" placeholder="请输入任务" value={ this.state.iptVal} onChange={(e) => {this.changeIpt(e)}}/>
                    {/* 2.1 在app.js中给 添加事项按钮 绑定 点击事件 */}
                    {/* 2.2.2 在输入任务的input中 绑定ref */}
                    <button onClick={this.addTodo}>添加事项</button>
                </div>
                {/* 列表 */}
                < ul className="todo-main" >
                    {/* 1.7 在模板中展示 */}
                    {
                        globalState.list.map(item => {
                            if (item.status === false && globalState.viewKey === "undone") {
                                return (<li key={item.id}>
                                    {/* 4.1 渲染 复选框的状态 */}
                                    {/*  4.2 给复选框添加onchange事件 获取 id */}
                                    <input type="checkbox" checked={item.status} onChange={() => {this.changeCheck(item.id)}}/> <span>{item.info}</span>
                                    {/* 3.1 给删除按钮添加点击事件 并传递 id */}
                                    <a href="#" onClick={() => {this.delTodo(item.id)}}>删除</a>
                                </li>)
                            } else if (item.status === true && globalState.viewKey === "done") {
                                return (<li key={item.id}>
                                    {/* 4.1 渲染 复选框的状态 */}
                                    {/*  4.2 给复选框添加onchange事件 获取 id */}
                                    <input type="checkbox" checked={item.status} onChange={() => {this.changeCheck(item.id)}}/> <span>{item.info}</span>
                                    {/* 3.1 给删除按钮添加点击事件 并传递 id */}
                                    <a href="#" onClick={() => {this.delTodo(item.id)}}>删除</a>
                                </li>)  
                            } else if (globalState.viewKey === "all") {
                                return (<li key={item.id}>
                                    {/* 4.1 渲染 复选框的状态 */}
                                    {/*  4.2 给复选框添加onchange事件 获取 id */}
                                    <input type="checkbox" checked={item.status} onChange={() => {this.changeCheck(item.id)}}/> <span>{item.info}</span>
                                    {/* 3.1 给删除按钮添加点击事件 并传递 id */}
                                    <a href="#" onClick={() => {this.delTodo(item.id)}}>删除</a>
                                </li>)
                            }
                        })
                    }
                </ul >
                {/* 底部菜单 */}
                < div className="todo-footer" >
                    <p>{globalState.list.length}条剩余</p>
                    <div className="todo-footer-button">
                        {/* all 全部  undone 未完成  done 已完成  */}
                        <button className={globalState.viewKey === 'all' ? 'primary' : ''} onClick={() => {this.changeViewKey('all')}}>全&nbsp;&nbsp;部</button>
                        <button className={globalState.viewKey === 'undone' ? 'primary' : '' } onClick={() => {this.changeViewKey('undone')}}>未完成</button>
                        <button className={globalState.viewKey === 'done' ? 'primary' : ''} onClick={() => {this.changeViewKey('done')}}>已完成</button>
                    </div>
                    <a href="#" onClick={this.clearFinish}>清除已完成</a>
                </div >
            </div >
        )
    }
}

//组件获取全局状态 使用connect包裹
const mapStateToProps = state => ({ globalState: state });
export default connect(mapStateToProps)(App);
