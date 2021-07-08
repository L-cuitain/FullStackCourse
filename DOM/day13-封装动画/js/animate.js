
/**
 * 
 * @param {*} element  获取的元素 
 * @param {*} attr  获取的元素属性
 */
function getStyle(element,attr){
    //三元判断是否支持 window.getComputedStyle
    return window.getComputedStyle ? window.getComputedStyle(element,null)[attr] : element.currentStyle[attr];
}


//封装变速动画(对象  回调函数 透明度)
/**
 * 
 * @param {*} element  获取的元素
 * @param {*} targetObj  获取元素的 多个属性 对象 
 * @param {*} callback   回调函数
 */
function animate(element,targetObj,callback){
    // 清除定时器
    clearInterval(element.timer);

    //创建定时器
    element.timer = setInterval(function(){

    //状态变量  判断是否所有属性 都达到目标
    var flag = true;

    //循环对象 targetObj
    for(let attr in targetObj){
        //判断属性
        if(attr == 'zIndex'){
            //如果属性名为 zIndex  直接把zIndex值赋值给元素
            element.style[attr] = targetObj[attr];
        }else if(attr == 'opacity'){
            //获取当前值
            var current = parseInt(getStyle(element,attr)*100);

            //获取目标值
            var target = target[attr] * 100;

            //计算步长
            let step = (target - current) / 10;

            //判断步长是否为 小数
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            //累加步长
            current += step;

            //将 当前值 赋值给 元素
            element.style[attr] = current / 100;
        }else{
            //获取当前值
            var current = parseInt(getStyle(element,attr));

            //获取目标值
            var target = targetObj[attr];

            //计算步长
            let step = (target-current) / 10;

            //判断step是否为小数
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            //累加步长
            current += step;

            //将目标值赋值给 元素
            element.style[attr] = current + 'px';
        }

            //停止定时器
            if(current !== target){
                flag = false;
            }
        }

        //判断 flag 为 true
        if(flag == true){
            //清楚定时器
            clearInterval(element.timer);

            //判断callback
            callback ? callback() : null;
        }
    },20);
}