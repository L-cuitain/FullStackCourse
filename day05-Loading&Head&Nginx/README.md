# Loading
接口在指定时间没有返回数据时,给loading加载提示

## 实现思路
1. 在components/LoadingBar.vue 定义开始加载,结束加载两个方法
```js
methods:{
        //开始加载
        start(){
            this.isShow = true;
        },
        //结束加载
        finish(){
            this.isShow = false;
        }
    }
```

2. 在nuxt.config.js中配置loading
```js
export default{
    //配置Loading
    loading:'~/components/LoadingBar.vue'
}
```

3. 在页面中使用 /pages/index.vue
```js
export default {
  mounted(){
    //保证dom加载完毕
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        //关闭loading
        this.$nuxt.$loading.finish();
      },3000);
    });
  }
}
```


# Head配置
开发网站时为了提升SEO优化,出了SSR,还可以设置网页TDK
T: title
D: description
K: keywords

## 实现思路
1. nuxt.config.js配置head(title,description,keywords)
```js
export default{
    head: {
    title: '京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。' },
      { name: 'keywords',content:"网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东"},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
}
```


2. 页面中配置head
```js
export default {
  //页面中配置TDK
  head(){
    return{
      title: '首页标题',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    }
  }
}
```


# Nginx
## 下载
http://nginx.org/en/download.html

## 命令
校验nginx配置是否正确
```
nginx -t
```

启动服务
```
一.推荐
start nginx

二.使你的cmd窗口一直处于执行中，不能进行其他命令操作
nginx.exe
```

停止
```
快速停止
nginx -s stop

完整停止
nginx -s quit
```

重启
```
重新加载nginx
nginx -s reopen

重新加载Nginx配置文件，然后以优雅的方式重启Nginx
nginx -s reload
```

## 项目打包部署

### 静态部署
优势: 访问速度快
劣势: 网站数据频繁变化则不能静态化

#### 操作流程
1. 打包
```
yarn generate
```

2. 存放生成的dist文件夹

3. nginx配置
conf/nginx.conf
```
    server {
        listen       端口号;
        server_name  域名;

        location / {
            root   存放目录;
            index  index.html index.htm;
        }
    }
```

### 动态部署
优势: 数据可以实时更新
劣势: 访问速度变慢

#### 操作流程
1. 打包
```
yarn build
```

2. 将`.nuxt`,`static`,`nuxt.config.js`,`package.json`放到服务器指定目录

3. 使用`yarn`安装需要的包

4. 在服务端项目根目录
```
yarn start
```