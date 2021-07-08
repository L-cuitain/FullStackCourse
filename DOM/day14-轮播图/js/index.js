//获取元素
let slider = document.querySelector('.slider');

let ul = document.querySelector('ul');

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let ol = document.querySelector('ol');

//左右按钮显示隐藏
slider.addEventListener('mouseenter',function(){
    //按钮显示
    prev.style.display = 'block';
    next.style.display = 'block';

    //清除定时器
    clearInterval(timer);

    //重置定时器
    timer = null;
});

slider.addEventListener('mouseleave',function(){
    //按钮隐藏
    prev.style.display = 'none';
    next.style.display = 'none';

    //添加定时器
    timer = setInterval(function(){
        next.click();
    },2000);
});


//在图片项末尾添加第一张图片
//获取第一张图片
let firstLi = ul.children[0];
//克隆图片
let cloneLi = firstLi.cloneNode(true);

//添加到ul中
ul.appendChild(cloneLi);

//重新设置ul宽度
ul.style.width = slider.offsetWidth * ul.children.length + 'px';

//创建变量num
let num = 0;

//创建变量cricle
let cricle = 0;

//设置flag
let flag = true;

//添加小圆点
for(let i = 0 ; i < ul.children.length-1 ; i++){
    
    let li = document.createElement('li');

    li.dataset.index = i;

    ol.appendChild(li);

    ol.children[0].classList.add('active');

    //点击小圆点移动图片
    li.addEventListener('click',function(){
        //排他
        for(let i = 0 ; i < ol.children.length ; i++){
            ol.children[i].classList.remove('active');
        }

        this.classList.add('active');

        //获取index
        let index=  li.dataset.index;
        num = index;
        cricle = index;

        animate(ul,{left: slider.offsetWidth * -index});
    });
}


//左右切换图片
next.addEventListener('click',function(){

    //判断flag
    if(flag == true){

    //改变flag值
    flag = false;

    //判断num是否到达长度的末尾一位
    if(num == ul.children.length-1){
        num = 0;
        ul.style.left = 0;
    }

    //num自增
    num++;

    //调用动画函数
    animate(ul,{left: slider.offsetWidth * -num},function(){
        flag = true;
    });

    //图片移动小圆点跟随移动
    cricle++;
    //判断小圆点是否为最后一位
    if(cricle == ol.children.length){
        cricle = 0;
    }
    //调用函数
    cricleMove();
}
});


prev.addEventListener('click',function(){

    if(flag == true){
     
    flag = false;    

    //判断num是否到达长度起始值
    if(num == 0){
        num = ul.children.length-1;
        ul.style.left = slider.offsetWidth * num;
    }

    //num自增
    num--;

    //调用动画函数
    animate(ul,{left: slider.offsetWidth * -num},function(){
        flag = true;
    });

    //判断小圆点是否到达起始点
    if(cricle == 0){
        cricle = ol.children.length;
    }

    cricle--;

    //调用函数
    cricleMove();
}
});



//创建函数  小圆点移动
function cricleMove(){
    //排他
    for(let i = 0 ; i < ol.children.length ; i++){
        ol.children[i].classList.remove('active');
    }

    ol.children[cricle].classList.add('active');
}

//创建定时器 
let timer = setInterval(function(){
    next.click();
},2000);