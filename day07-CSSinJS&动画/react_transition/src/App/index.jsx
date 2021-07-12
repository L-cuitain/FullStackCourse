import React from 'react';

// import TransitionACom from '../Components/TransitionACom';
// import TransitionBCom from '../Components/TransitionBCom';
import SwitchTransitionCom from '../Components/SwitchTransitionCom';
import TransitionCCom from '../Components/TransitionCCom';

class App extends React.Component{
  render(){
    return(
      <div>
        <SwitchTransitionCom />
        <TransitionCCom />
      </div>
      
    )
  }
}

export default App;
