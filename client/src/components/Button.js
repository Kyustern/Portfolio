import React from 'react'
import Styled from 'styled-components'

const Button = ({fSize, children, onClick}) => {

    const Butt = Styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    font-size: ${fSize ? fSize : '70%'};
    padding: 4px;
    border: none;
    color: white;
    background-color: transparent;
    ${this}:hover {
        color: black;
        background-color: white;
        cursor: pointer;
    }
    `

    return(
        <Butt onClick={onClick}>
            {children}
        </Butt>
    )
}

export default Button