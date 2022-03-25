import { useContext } from 'react';

import ThemeContext from '../../context/context';

function ThemedButton(){
    //通过useContext获取context中的值
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    )
}

export default ThemedButton;