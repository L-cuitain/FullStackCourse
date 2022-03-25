import RefTool from './components/refTool';

import { useRef , forwardRef } from 'react';

//创建React组件 组件能够将 ref 属性传递给其他组件
const ForwardRef = forwardRef(RefTool);

function App() {

  const iptRef = useRef();

  const refClick = () => {
    iptRef.current.myfocus();
  }

  
  return (
    <div className="App">
        <ForwardRef ref={iptRef}/>  
        <button onClick={refClick} >点击获取文本框焦点</button>    

    </div>
  );
}

export default App;
