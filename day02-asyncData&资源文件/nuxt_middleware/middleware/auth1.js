export default()=>{
    console.log('auth1中间件执行');
    const server = process.server ? 'server' : 'client';
    console.log(`auth2中间件执行在${server}`);
}