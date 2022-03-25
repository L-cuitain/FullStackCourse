import React , {Fragment} from 'react';

//类组件(有状态组件)
class ThisCom extends React.Component{

    //三种方式解决this指向问题

    constructor(){
      super();

      //3.bind绑定
      // this.handlerClick = this.handlerClick.bind(this);
    }

    state = {
        count : 10
    }

    //1.方法使用箭头函数
    handlerClick = () => {
        console.log(this.state.count);
    }



    render() {
        return (
          <Fragment>
          {/* Fragment 父元素注释为 */}
          <div onClick={this.handlerClick}>我是类组件{this.state.count}</div>
          {/* 2.在调用方法时改变this指向 */}
          {/* <div onClick={() => this.handlerClick()}>我是类组件{this.state.count}</div> */}
          </Fragment>
        )
      }
}

export default ThisCom;