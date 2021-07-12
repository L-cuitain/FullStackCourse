import React from 'react';
require('./index.css');

//类组件
class BrandCom extends React.Component{
    
    state = {
        id: "",
        name: '',
        keywords: '',
        brandList: [
            { id: 1, name: '奔驰', ctime: '2020/9/23' },
            { id: 2, name: '宝马', ctime: '2020/9/21' },
            { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
            { id: 4, name: '千里马', ctime: '2020/5/3' }
        ],
    }

    //获取编号
    handleChange = (e) => {
        //判断event获取的自定义属性值
        // switch (e.target.dataset.ipt) {
        //     case 'id':
        //         //修改id值
        //         this.setState({
        //             id: e.target.value
        //         })
        //         break;
        
        //     case 'name':
        //         //修改name值
        //         this.setState({
        //             name: e.target.value
        //         })
        //         break;

        //     case 'keywords':
        //         //修改keywords值
        //         this.setState({
        //             keywords: e.target.value
        //         })
        //         break;
        // }

        //根据name获取到 event值 并更改state中的状态
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    //搜索
    handleSearch = () => {
        //获取搜索内容
        // console.log(this.state.keywords);

        //判断搜索内容
        let newBrandList = this.state.brandList;

        return newBrandList.filter(item => {return item.name.includes(this.state.keywords)});
        
    }

    //添加方法
    handleAdd = () => {
        //判断id和name是否重复
        const flag = this.state.brandList.find(item => {return item.id === Number(this.state.id) || item.name === this.state.name});

        if(flag){
            return alert("重复字段");
        }

        //判断字段是否为空
        if(this.state.id.trim() === "" || this.state.name.trim() === ""){
            alert("编号和姓名不能为空");
            return;
        }

        //创建新增对象
        const brand = {
            id: this.state.id,
            name: this.state.name,
            ctime: new Date().toLocaleDateString()
        }

        //设置值
        this.setState({
            brandList: [...this.state.brandList,brand],
            id: '',
            name: ''
        })
    }

    //删除
    handleDelete = (index) => {
        //获取原数据
        let newBrandList = [...this.state.brandList];

        //删除元素
        newBrandList.splice(index,1);
        
        //设置值
        this.setState({
            brandList : newBrandList
        })
    }
    
    //挂载
    render(){
        return (
            <div id="app">
                {/* <!-- panel 面板 --> */}
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">添加品牌</h3>
                    </div>

                    <div className="panel-body">
                        <div className="form-group form-inline">
                            <div className="input-group">
                                <div className="input-group-addon">编号</div>
                                <input type="text" name='id' className="form-control" value={this.state.id} onChange={this.handleChange}/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-addon">品牌名称</div>
                                <input type="text" name='name' className="form-control" value={this.state.name} onChange={this.handleChange}/>
                            </div>  
                            <div className="input-group">
                                <button className="btn btn-primary" onClick={this.handleAdd}>添加</button>
                            </div>
                            <div className="input-group pull-right">
                                <div className="input-group-addon">按名称搜索</div>
                                <input type="text" name='keywords' className="form-control" value={this.state.keywords} onChange={this.handleChange}/>
                            </div>
                        </div>

                        {/* 表格区域 */}
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>品牌名称</th>
                                    <th>添加时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.handleSearch().map((item,index) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.ctime}</td>
                                            <td>
                                                <a href="#" onClick={this.handleDelete.bind(this,index)}>删除</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandCom;