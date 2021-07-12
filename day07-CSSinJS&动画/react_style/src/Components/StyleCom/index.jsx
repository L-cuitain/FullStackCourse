// 1.引入 style-component
import Styled from 'styled-components';

//2. 创建 CSS in JS
const Button = Styled.button`
background: transparent;
border-radius: ${props => props.borderRadius};
border: 2px solid palevioletred;
color: ${props => props.color};
margin: 0 1em;
padding: 0.25em 1em;
`

const Div = Styled.div`
    width: 500px;
    height: 200px;
`


export { Button , Div };