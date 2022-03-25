//引入koa-router
const Router = require('koa-router');

//引入path
const path = require('path');

//创建router实例
const router = new Router();

//引入fs
const fs = require('fs');

//获取上传文件,并存储到服务器
router.post('/upload', async (ctx,next) => {
    // console.log(ctx.request.files);
    //获取上传文件
    const file = ctx.request.files.myfile.path;
    console.log(file);
    //创建可读流
    const reader = fs.createReadStream(file);
    //创建可写流
    const upStream = fs.createWriteStream(path.join(__dirname,`../upload/${ctx.request.files.myfile.name}`));
    //可读流通过管道写入可写流
    reader.pipe(upStream);

    //返回
    return ctx.body = '上传成功';
})


router.get('/',async (ctx) => {
    await ctx.render('index');
})

router.post('/getFilesInfo', async (ctx) => {
    console.log(ctx.request.files);
    console.log(ctx.request.body);
})

//导出router
module.exports = router;
