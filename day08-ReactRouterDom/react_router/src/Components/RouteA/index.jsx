
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const RouteACom = () => {
    //获取父路由 路径 地址  参数
    const { path , url , params } = useRouteMatch();
    console.log(path , url , params);

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${path}/Recod`}>滑稽1</Link>
                </li>
                <li>
                    <Link to={`${path}/TopList`}>滑稽2</Link>
                </li>
                <li>
                    <Link to={`${path}/PlayList`}>滑稽3</Link>
                </li>
            </ul>

            {/* Switch匹配单一路由 */}
            <Switch>
                <Route path={`${path}/Recod`} component={Recod}></Route>
                <Route path={`${path}/TopList`} component={TopList}></Route>
                <Route path={`${path}/PlayList`} component={PlayList}></Route>
            </Switch>
        </div>

    )
}

//嵌套路由
const Recod = () => {
    return (
        <div>
            <h1>滑稽1</h1>
        </div>
    )
}

const TopList = () => {
    return (
        <div>
            <h1>滑稽2</h1>
        </div>
    )
}

const PlayList = () => {
    return (
        <div>
            <h1>滑稽3</h1>
        </div>
    )
}



export default RouteACom;