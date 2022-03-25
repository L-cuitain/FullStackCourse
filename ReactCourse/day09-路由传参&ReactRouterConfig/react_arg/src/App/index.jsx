import React from 'react';

//引入组件
import RouteACom from '../Components/RouteACom';
import RouteBCom from '../Components/RouteBCom';
import RouteCCom from '../Components/RouteCCom';
import indexPageCom from '../Components/indexPageCom';


//引入路由
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  state = {
    name: '火车王',
    age: 19,
    hobby: [
      {
        id: 1,
        hobbyName: '爱干饭'
      },
      {
        id: 1,
        hobbyName: '爱干人'
      }
    ],
    password: 'aasdf142122142$@!$12421'
  }

  render() {
    return (
      <HashRouter>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">主菜单</NavLink>
          </li>
          <li>
            <NavLink to={`/routeA?name=${this.state.name}&age=${this.state.age}&hobby=${this.state.hobby[0]}&hobby=${this.state.hobby[1]}`} activeClassName="active">路由A</NavLink>
          </li>
          <li>
            <NavLink to={`/routeB/${this.state.password}`} activeClassName="active">路由B</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: "/routeC",
              state : {
                data: '加密过的回收站'
              }
            }} activeClassName="active">路由C</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/routeA" component={RouteACom}></Route>
          <Route exact path="/routeB/:id" component={RouteBCom}></Route>
          <Route exact path="/routeC" component={RouteCCom}></Route>
          <Route component={indexPageCom}></Route>
        </Switch>
      </HashRouter>

    )
  }
}

export default App;
