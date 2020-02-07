import React from 'react'
import Styled from 'styled-components'

const Butt = Styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    font-size: 70%;
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

const Button = (props) => {
    return(
        <Butt onClick={props.onClick}>
            {props.children}
        </Butt>
    )
}

export default Button