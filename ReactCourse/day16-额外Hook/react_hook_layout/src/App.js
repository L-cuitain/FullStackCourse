import { useState , useEffect , useLayoutEffect } from 'react';

function App() {
  const [count , setCount] = useState(0);
  
  //使用useEffect 会出现闪烁的情况
  useLayoutEffect(() => {
    if(count === 0){
      const randomNum = 10 + Math.random() * 100;
      setCount(10 + Math.random()*200);
    }
  },[count])

  return (
    <div className="App" onClick={() => setCount(0)}>
      {count}
    </div>
  );
}

export default App;
