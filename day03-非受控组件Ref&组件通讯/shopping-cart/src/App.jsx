import React from "react"
import './App.css';
import CartTitle from "./components/CartTitle"
import CartList from "./components/CartList"
import CartTotal from "./components/CartTotal"


class App extends React.Component {

  state = {
    name: "喜羊羊",
    list: [{
      id: 1,
      name: 'TCL彩电',
      price: 1000,
      num: 1,
      img: 'img/a.jpg'
    }, {
      id: 2,
      name: '机顶盒',
      price: 1000,
      num: 1,
      img: 'img/b.jpg'
    }, {
      id: 3,
      name: '海尔冰箱',
      price: 1000,
      num: 1,
      img: 'img/c.jpg'
    }, {
      id: 4,
      name: '小米手机',
      price: 1000,
      num: 1,
      img: 'img/d.jpg'
    }, {
      id: 5,
      name: 'PPTV电视',
      price: 1000,
      num: 2,
      img: 'img/e.jpg'
    }]
  }

  //创建点击事件
  changeNum = (id,target,num) => {
    // console.log(id,target,num);
    //获取原数组
    let newList = this.state.list;
    newList.find((item) => {
      if(item.id == id){
        if(target === 'blur'){
          item.num = num < 0 ? 0 : num;

          if(String(num)[0] === '0'){
            item.num = 0;
          } 
          return true;
        }
        if(target === 'add'){
          item.num++;
          return true;
        }
        if(target === 'min'){
          item.num--;
          if(item.num <= 0){
            item.num = 0;
          }
          return true;
        }
      }
    })

    this.setState({
      list : newList
    })
  }

  // 删除商品
  delete = (id) =>{
    const arr = this.state.list.filter(item=>item.id !== id);
    this.setState({
      list: arr
    })
    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <CartTitle name={this.state.name} ></CartTitle>
          <CartList  list={this.state.list} deleteItem={this.delete} changeNum={this.changeNum}></CartList>
          <CartTotal list={this.state.list}></CartTotal>
        </div>
      </div>
    );
  }
}

export default App;
