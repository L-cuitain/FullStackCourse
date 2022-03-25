//引入 useRef
import { useRef } from 'react';

function App() {
  //创建ref对象
  const inputEL = useRef(null);

  //通过按钮点击事件 获取文本框的焦点
  const onButtonClick = () => {
    //`current` 指向已挂载到 DOM 上的文本输入元素
    inputEL.current.focus();
  }

  return (
    <div className="App">
        <input type="text" ref={inputEL}/>
        <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default App;
