//当页面加载完毕
window.onload = function(){
    //获取文本框
    let telephone = document.querySelector('#tel');
    let qq = document.querySelector('#qq');
    let nickname = document.querySelector('#nc');
    let message = document.querySelector('#msg');
    let password = document.querySelector('#pwd');
    let surepwd = document.querySelector('#surepwd');
    

    //创建正则表达式规则
    //手机号
    //第一位 : 1
    //第二位 : [3|4|5|7|8]
    //其余: \d (代表[0-9])     {9} 共 9 位数  
    rexTel = /^1[3|4|5|7|8]\d{9}$/;

    //QQ
    //第一位: [1-9]
    //其余: \d    {4, }  最少4位  
    rexQQ = /^[1-9]\d{4,}$/;

    //昵称
    //中文字符: [\u4e00-\u9fa5]
    //范围: {2,8}   最少2个字符  最多8个字符
    resNc = /^[\u4e00-\u9fa5]{2,8}$/;

    //短信验证码
    //范围: {6}  6位数字  \d (代表[0-9])
    resMsg = /\d{6}/;

    //登录密码
    //规则: 大小写字母 0到9数字 -_  
    //范围: {6,16}  最少 6 个字符  最多 16 个字符
    resPwd = /^[a-zA-Z0-9-_]{6,16}$/;



    //创建函数  判断正则表达式
    //参数: 文本框  正则表达式验证
    function checkRes(ipt,rex){
        //创建文本框移出域事件
        ipt.onblur = function(){
            //判断是否符合校验要求
            if(rex.test(ipt.value)){
                //判断如果符合
                //将input 后的 span 的类更改
                ipt.nextElementSibling.className = 'success';
                // 在 span中 添加内容
                ipt.nextElementSibling.innerHTML = '<i class="success_icon"></i>  恭喜您输入正确'

            }else{    
                //将input 后的 span 的类更改
                ipt.nextElementSibling.className = 'error';
                 // 在 span中 添加内容
                ipt.nextElementSibling.innerHTML = '<i class="error_icon"></i>  格式输入不正确  请重新输入'
            }
        }
    }


    //调用函数  给所有文本框添加正则校验
    checkRes(telephone,rexTel);
    checkRes(qq,rexQQ);
    checkRes(nickname,resNc);
    checkRes(message,resMsg);
    checkRes(password,resPwd);


    //确认密码
    surepwd.onblur = function(){
        //判断密码是否相同
        if(surepwd.value === password.value){
            //判断如果符合
            //将input 后的 span 的类更改
            surepwd.nextElementSibling.className = 'success';
            // 在 span中 添加内容
            surepwd.nextElementSibling.innerHTML = '<i class="success_icon"></i>  恭喜您输入正确'

        }else{    
            //将input 后的 span 的类更改
            surepwd.nextElementSibling.className = 'error';
             // 在 span中 添加内容
             surepwd.nextElementSibling.innerHTML = '<i class="error_icon"></i>  密码输入不正确  请重新输入'
        }
    }
}