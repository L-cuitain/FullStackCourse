//引入 React Hook
import React , { useState , useCallback , useRef , useEffect } from 'react';

//在 Hook 获取上一次指定的Props
const usePrevProps = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

function App() {

  const [count , setCount] = useState(0);
  const [total , setTotal] = useState(0);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // const handleCount = () => {setCount(count + 1)};
  //空数组代表这个函数在组件的生命周期内会 永久缓存
  //将count 加入数组中 增加时就会触发重新渲染 代表count的值改变时不做缓存
  const handleCount = useCallback(() => setCount(count => count+1),[count]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const handleTotal = () => {setTotal(total + 1)};
  const prevHandleCount = usePrevProps(handleCount);

  //false 每次App组件渲染都是重新创建一个新的函数
  //可能导致像 PureComponent , shouldComponentUpdate , React.memo等相关优化失效
  //这时需要引入 useCallback 通过它的缓存功能 在合适时将 handleCount 缓存
  console.log('两次处理函数是否相等：', prevHandleCount === handleCount);

  return (
    <div className="App">
        <div>Count is {count}</div>
        <div>Total is {total}</div>
        <br />
        <div>
          <button onClick={handleCount}>Increment Count</button>
          <button onClick={handleTotal}>Increment Total</button>
        </div>
        <AotherComponent onClick={handleCount}/>
    </div>
  );
}

const AotherComponent = React.memo(function AotherComponent({ onClick }){
  //因为 handleCount 是一个缓存函数 当传递给经过 React.memo优化的组件 AotherComponent时不会触发渲染
  console.log('AotherComponent 组件渲染');
  return (
    <button onClick={onClick}>AotherComponent - Increment Count</button>
  )
})

export default App;
