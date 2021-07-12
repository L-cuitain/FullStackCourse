import React from 'react';
import Mouse from '../Mouse';

class ClientCom extends React.Component{
    render(){
        return(
            <div>
                ClientCom
                <Mouse>
                    {(mouse) => {
                        return(
                            <img src="../../favicon.ico" style={{position:'absolute' , top: mouse.Y , left: mouse.X}}/>
                        )
                    }}
                </Mouse>
            </div>
        )
    }
}

export default ClientCom;