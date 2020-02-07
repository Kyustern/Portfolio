import React, { useState, useEffect, createRef } from 'react'
import Styled from 'styled-components'

const Input = ({ width, placeholder, hook}) => {

    const [isValid, value, bind, reset] = hook('')

    const InputStyles = Styled.input`
    margin-top: 30px;
    width: ${width ? width : '50%'};
    height: 35px;
    /* border-radius: 5px; */
    font-size: 25px;
    text-align: center;
    font-family: 'VT323', monospace;
    color: white;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: inherit;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    ${this}:focus {
        border-bottom: solid #1878d6 3px;
        ::placeholder {
            color: transparent;
        }
    }
`

    const inputRef = createRef()

    console.log('re render lol')

    return (
        <InputStyles
            ref={inputRef}
            // key={Math.random()}
            placeholder={placeholder}
            {...bind}
            >
        </InputStyles>
    )
}

export default Input