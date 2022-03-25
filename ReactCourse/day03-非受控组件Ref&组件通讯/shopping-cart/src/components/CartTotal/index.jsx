import React from "react"

class CartTotal extends React.Component {
  state = {
    total: 0
  }


  computedTotal = ()=>{
    let sum = 0;
    this.props.list.forEach(item => {
      sum+=item.price*item.num
    });
    return sum;
  }

  render() {
    return (
      <div className="total">
        <span>总价：</span>
        <button>结算：{this.computedTotal()} </button>
      </div>
    )
  }
}

export default CartTotal;