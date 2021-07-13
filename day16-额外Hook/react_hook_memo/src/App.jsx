//引入 React Hook
import { useMemo , useState , useEffect , useRef } from 'react';

//在 Hook 中获取上一次指定的 props
const usePrevProps = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  })

  return ref.current;
}

function App() {

  const [count , setCount] = useState(0);
  const [total , setTotal] = useState(0);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //当 count 变量值改变时才执行 useMemo第一个入参的函数
  const calcValue = useMemo(() => {
    return Array(3).fill(4).map(num => {
       console.log(num);
    })

  },[count]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const handleCount = () => setCount(count + 1);
  const handleTotal = () => setTotal(total + 1);
  const prevCalcValue = usePrevProps();

  console.log("两次计算结果是否相同: ", prevCalcValue === calcValue);


  return (
    <div className="App">
      <div>Count is {count}</div>
      <div>Total is {total}</div>
      <br />
      <div>
        <button onClick={handleCount}>Increment Count</button>
        <button onClick={handleTotal}>Increment Total</button>
      </div>
    </div>
  );
}

export default App;
