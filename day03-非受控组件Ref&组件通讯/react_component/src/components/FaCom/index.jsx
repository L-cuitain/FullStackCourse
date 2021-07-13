//引入 proTypes
import propTypes from "prop-types"

//函数组件通信
const FaCom = (props) => {
    return(
        <div>
            {/* 获取父组件传递的值 */}
            <h1>我是{props.newStr}</h1>
            <p>{props.SoMsg}</p>
        </div>
    )
}

//函数组件声明默认值
FaCom.defaultProps = {
    newStr : "蚌埠住了"
}


//函数组件规定props传入参数的类型
FaCom.propTypes = {
    newStr : propTypes.string
}

export default FaCom;