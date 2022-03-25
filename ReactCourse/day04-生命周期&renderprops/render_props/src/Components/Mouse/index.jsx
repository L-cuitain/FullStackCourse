import React from 'react';

class Mouse extends React.Component{
  state = {
    X: 0,
    Y: 0
  }

  componentDidMount(){
    window.addEventListener('mousemove',this.handleGetXY)
  }

  handleGetXY=(e)=>{
    this.setState({
      X: e.screenX,
      Y: e.screenY
    })
  }
  
  // render(){
  //   return (
  //     <Fragment>
  //       <img src="./favicon.ico" style={{position:'absolute' , top: this.state.Y , left: this.state.X}}/>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </Fragment>
      
  //   )
  // }
  render(){
    return this.props.children(this.state)
  }
}


export default Mouse;