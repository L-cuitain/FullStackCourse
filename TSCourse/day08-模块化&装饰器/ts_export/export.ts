//ts中的模块化(有时候可以用在前端中 也会用在node中)
//es6模块化
//commonJS规范的模块化

//ts中的模块化  需要兼容es6的模块化和commonJS模块化
//node最新都支持es6模块化 es6 moudels

//1.ES6模块化
//在ES6出现之前 JS不像其他语言拥有 "模块化" 这一概念 , 于是为了支持JS模块化
//我们使用类 , 立即执行函数或者第三方插件(RequireJS , seaJS)来实现模块化
//但是在ES6出现之后 , 上述解决方案已经被废弃 , 因为ES6中正式引入来模块化概念

//ES6模块化和NodeJS中一样 , 一个文件就是一个模块 , 模块中的数据都是私有的
//ES6模块化和NodeJS中一样 , 可以通过对应的关键字暴露模块中的数据 , 可以通过对应的关键字 , 使用模块中暴露的数据

//Node中 实现的是commonJS规范
//导入: 关键字 = require(路径)
//导出: moudle.exports = {key:value , key:value}
//moudle.exports = function(){}

//ES6模块化的使用
//常规导出

//分开导入导出
//export xxx
//import {xxx} from "path"
// import {add , minus} from "path";
//分开导入导出
import {add , minus} from "./export_any";
console.log(add(2,1));
console.log(minus(2,1));

//一次性导入导出
import {subAdd , subMins as subJian } from "./export_one";
subAdd(5,4);
subJian(84,52);

//export {xxx,yyy,zzz}
//import {xxx,yyy,zzz} from "path"
//注意:
//接收导入变量名必须和导出变量名一致
//如果想修改接收变量名可以通过 xxx as newName方式
//变量名被修改后原有变量名自动失效

//默认导入导出
//export default xxx;
//import xxx from "path"
//注意: 一个模块只能使用一次默认导出 多次无效
//默认导出时 , 导入的名称可以和导出的名称不一样

import defaultFn from "./export_default";

// defaultFn(1,2);
// console.log(defaultFn);

// defaultFn.subAdd();




