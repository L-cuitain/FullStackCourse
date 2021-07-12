import React from 'react';
import Mouse from '../Mouse';

class ScreenCom extends React.Component{
    render(){
        return(
            <div>
                ScreenCom
                <Mouse render={(mouse) => {
                        return(
                            <div>{mouse.X}--{mouse.Y}</div>
                        )
                    }}>
                    
                </Mouse>
            </div>
        )
    }
}

export default ScreenCom;