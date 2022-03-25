import React from 'react';

//引入路由
import { HashRouter , NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';

class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <ul>
          <li>
            <NavLink to="/routeA">路由A</NavLink>
          </li>
          <li>
            <NavLink to="/routeB">路由B</NavLink> 
          </li>
        </ul>

        {/* 显示视图 */}
        { renderRoutes(routes) }
      </HashRouter>
    )
  }
}

export default App;
