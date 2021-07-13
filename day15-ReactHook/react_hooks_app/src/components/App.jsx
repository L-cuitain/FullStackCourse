import { useState } from 'react';

function App(){
  const [state,setState] = useState("火车王");
  
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("滑稽")}>Click Update</button>
    </div>
  )
}

export default App;
