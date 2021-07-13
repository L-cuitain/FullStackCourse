import React from 'react';

import './App.css';

//引入react-router-dom
import { BrowserRouter , Switch , HashRouter , Link , NavLink , Route } from 'react-router-dom';

//引入路由
import RouteA from '../Components/RouteA';
import RouteB from '../Components/RouteB';

import User from '../Components/RedirectACom';
import Login from '../Components/RedirectBCom';


class App extends React.Component{

  render(){
    return(
      <HashRouter>
        <ul>
          <li>
            <NavLink activeClassName='active' to="/RouteA">RouteA</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to="/RouteB">RouteB</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/login">登录页面</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/user">用户页面</NavLink>
          </li>
        </ul>

        {/* 只匹配一个 匹配到则不会继续匹配 */}
        <Switch>
          <Route path="/RouteA" component={RouteA}></Route>
          <Route exact path="/RouteB" component={RouteB}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
