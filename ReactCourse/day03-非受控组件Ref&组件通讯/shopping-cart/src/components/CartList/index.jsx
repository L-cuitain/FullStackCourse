import React from "react"


class CartList extends React.Component {

  handlerDelete = (id)=>{
    this.props.deleteItem(id);
  }

  //改变数量事件
  handleChangeNum = (id,e) => {
    // console.log(e.target.dataset.num);
    //判断用户点击元素
    switch (e.target.dataset.num) {
      case 'add':
        this.props.changeNum(id,'add');
        break;
    
      case 'min':
        this.props.changeNum(id,'min');
        break;
      
      case 'blur':
        this.props.changeNum(id,'blur',e.target.value);
        break;
    }
  }

  render() {
    return (
      <div>
        {
          this.props.list.map(item=>(
            <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
            <div className="change">
              {/* eslint-disable-next-line */}
              <a href="#" data-num='min' onClick={this.handleChangeNum.bind(this,item.id)}>－</a>
              <input type="text" className="num" data-num='blur' value={item.num} onChange={this.handleChangeNum.bind(this,item.id)}/>
              {/* eslint-disable-next-line */}
              <a href="#" data-num='add' onClick={this.handleChangeNum.bind(this,item.id)}>＋</a>
            </div>
            <div className="del" onClick={this.handlerDelete.bind(this,item.id)}>×</div>
          </div>
          ))
        }
      </div>
    )
  }
}

export default CartList;