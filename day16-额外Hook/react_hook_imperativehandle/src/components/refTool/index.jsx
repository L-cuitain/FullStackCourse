import { useRef , useImperativeHandle } from 'react';

function RefTool(props,ref){

    const inputRef = useRef(null);
    useImperativeHandle(ref , () => ({
        myfocus: () => {
            inputRef.current.focus();
        }
    }))
    return(
      <div>
          <input type="text" ref={inputRef}/>
      </div>  
    )
}

export default RefTool;