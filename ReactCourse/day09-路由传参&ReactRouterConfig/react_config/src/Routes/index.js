//路由管理
//引入组件
import RouteACom from '../Components/RouteACom';
import RouteBCom from '../Components/RouteBCom';

import RouteAChildACom from '../Components/RouteAChildACom';
import RouteAChildBCom from '../Components/RouteAChildBCom';


const routes = [
    {
        path: '/routeA',
        component: RouteACom,
        routes: [
            {
                path: '/routeA/rock',
                component: RouteAChildACom
            },{
                path: '/routeA/park',
                component: RouteAChildBCom
            }
        ]
    },
    {
        path: '/routeB',
        component: RouteBCom
    }
]


export default routes;