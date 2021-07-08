//为了能调用 constructor 中的this  要单独创建变量 that 来获取
var that;
//创建tab类
class Tab {
    //创建控制器  获取页面元素
    constructor(id) {
        //将that赋值
        that = this;
        //获取tab整体
        this.main = document.querySelector(id);
        //获取添加按钮
        this.add = this.main.querySelector('.tabadd');
        //获取tab标签ul
        this.uls = this.main.querySelector('.fisrstnav ul:first-child');
        //获取tab内容板块
        this.tabscon = this.main.querySelector('.tabscon');
        
        //引用方法
        this.init();
    }
    //创建类方法
    //init  初始化实例对象
    init() {
        //调用更新tab标签函数
        this.updateTab();
        //创建添加按钮的点击事件
        this.add.onclick = this.addTab;

        //创建标签的点击事件
        for (let i = 0; i < this.lis.length; i++) {
            //为每个li添加属性index 获取索引
            this.lis[i].index = i;
            //为每个li创建鼠标点击事件
            // this.lis[i].onclick = function(){
            //     //这里this指向 this.lis[i]
            //     console.log(this.index);
            // }
            //创建选项卡的点击事件
            this.lis[i].onclick = this.toggleTab;
            //创建选项卡删除按钮的点击事件
            this.removeIcon[i].onclick = this.removeTab;
            //创建选项卡文字的双击事件
            this.spans[i].ondblclick = this.editTab;
            //创建选项卡内容的双击事件
            this.sections[i].ondblclick = this.editTab;
        }
    }

    //因为需要动态生成新的标签   所以在函数中会更新所有tab标签
    updateTab(){
        //获取tab标签li
        this.lis = this.main.querySelectorAll('li');
        //获取tab内容
        this.sections = this.main.querySelectorAll('section');
        //获取所有删除按钮  和选项卡的数量一致
        this.removeIcon = this.main.querySelectorAll('.icon-guanbi');
        //获取ul中所有 第一个span  更改其中内容
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }

    //点击切换
    toggleTab() {
        // console.log(this);
        that.clearTab();
        //替换当前索引的标签页
        this.className = 'liactive';
        //替换当前tab内容
        that.sections[this.index].className = 'conactive';
    }

    //清除之前内容
    clearTab() {
        // console.log("clearTab()  "+this);
        // console.log("clearTab()  "+that);
        for (let i = 0; i < this.lis.length; i++) {
            //清除之前显示的tab
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    //添加标签页
    addTab() {
        //清除所有选中的选项卡
        that.clearTab();
        //创建随机数
        let random = Math.random();
        //添加新的选项卡
        that.uls.insertAdjacentHTML('beforeend', '<li class="liactive"><span>新增标签页</span><span class="iconfont icon-guanbi"></span></li>');
        //添加新的选项卡内容
        that.tabscon.insertAdjacentHTML('beforeend', `<section class="conactive">新增标签内容 ${random}</section>`);
        //重新调用init函数  刷新选项卡个数
        that.init();
    }

    //删除标签
    removeTab(e){
        //当点击删除按钮时会触发父元素的点击事件  使用stopPropagation()方法阻止冒泡
        e.stopPropagation();

        //获取 删除按钮 父节点的 索引
        let index = this.parentNode.index;
        // console.log(index);
        //使用 remove() 可以直接删除指定元素
        that.lis[index].remove();
        that.sections[index].remove();
        //重新初始化选项卡个数
        that.init();
        //如果删除的选项卡不为选中状态时  将保持显示选中的选项卡内容
        if(document.querySelector('.liactive')) return;

        //当删除一个选项卡后  将显示前一个选项卡内容
        //将索引 自减 为能获取到前一个选项卡  
        // index--;
        //使用 click() 手动调用点击事件  不需要鼠标点击触发
        //先判断 是否存在这个选项卡  如果不存在 则直接返回 false 如果存在  则手动调用点击事件
        // that.lis[index] && that.lis[index].click();

        //方式一: 判断
        // if(!index == 0){
        //     index--
        // }else{
        //     index++;
        // }

        // that.lis[index] && that.lis[index].click();



        
        //方式二: 判断
        if(index--){
            that.lis[index] && that.lis[index].click();
        }else{
            index++;
            that.lis[index] && that.lis[index].click();
        }
    }

    //编辑标签
    editTab(){
        //获取选项卡的文字
        let str = this.innerHTML;
        // console.log('双击了');
        //双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //将文字替换成表单
        this.innerHTML = '<input type="text" />';
        // console.log(this.children[0]);
        //获取到表单
        let input = this.children[0];
        input.value = str;
        //将文本框的值默认全选  
        input.select();
        //当鼠标离开文本框  则将新的文本框内容赋值给选项卡
        input.onblur = function(){
            // console.log(this.value);
            //赋值给spans
            this.parentNode.innerHTML = this.value;
        }

        //创建键盘弹起事件  让用户回车返回修改
        input.onkeyup = function(e){
            //判断 是否为回车键
            if(e.keyCode === 13){
                this.blur();
            }
        }
    }
}

new Tab('#tab');