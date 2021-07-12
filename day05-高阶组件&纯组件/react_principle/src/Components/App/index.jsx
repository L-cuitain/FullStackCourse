import React , {Fragment} from 'react';
import './App.css';

import CommentACom from '../CommentACom';
import CommentBCom from '../CommentBCom';

class App extends React.Component{
  state = {
    name: '滑稽'
  }

  render(){
    return (
      <Fragment>
          <CommentACom name={this.state.name}/>
          <CommentBCom />
      </Fragment>
    )
  }
}

export default App;
