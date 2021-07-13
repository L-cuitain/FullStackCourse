import React from 'react';

import { NavLink, useRouteMatch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const RouteACom = (props) => {

    const { path } = useRouteMatch();
    console.log(props.route);
    return (
        <div>
            <h1>RouteA: 格斯</h1>
            <ul>
                <li>
                    <NavLink to={`${path}/rock`}>ChildRouteA</NavLink>
                </li>
                <li>
                    <NavLink to={`${path}/park`}>ChildRouteB</NavLink>
                </li>
            </ul>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default RouteACom;