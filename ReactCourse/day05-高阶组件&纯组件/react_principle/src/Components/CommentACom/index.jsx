import HOC from '../HocBCom';

//调用封装的高阶组件 传入需要显示的html元素
const Position = state => {
    return(
        <div>
            <p>{state.X}--{state.Y}--{state.name}</p>
        </div>
    )
}

const CommentACom = HOC(Position);

export default CommentACom;