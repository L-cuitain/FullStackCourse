//设置拦截器 拦截登录
export default({ store , redirect }) => {
    //判断store中auth是否有值
    if(!store.state.auth){  
        return redirect('/login');
    }
}