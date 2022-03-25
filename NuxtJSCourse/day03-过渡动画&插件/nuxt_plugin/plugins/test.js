//创建test插件
//测试插件会在客户端和服务端执行
export default() => {
    let server = process.server ? 'server' : 'client';

    console.log(server);
}

