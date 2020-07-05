import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button`
width: auto;
background-origin: content-box;
margin: 1vw;
padding-left:0;
padding-right:0;
background: none;
border-style: none;
border-radius: 1000px;
transition-property: background-color transform;
transition-duration: 0.7s;

&:hover {
    transform : translate(0, -5px);
    cursor: pointer;
    background-color: #1878d6;
}
`

const SvgButton = ({children, url}) => {

    const clickHandler = () => {
        window.open(url, "_blank")
    }

    return(
        <Button onClick={clickHandler}>
            {children}
        </Button>
    )
}

export default SvgButton