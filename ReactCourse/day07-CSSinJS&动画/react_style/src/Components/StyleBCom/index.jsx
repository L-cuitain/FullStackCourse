import Styled from 'styled-components';
import React from 'react';

import {Div} from '../StyleCom';

const ODiv = Styled(Div)`
    background-color: red
`;

class StyleBCom extends React.Component{
    render(){
        return (
            <ODiv />
        )
    }
}

export default StyleBCom;

