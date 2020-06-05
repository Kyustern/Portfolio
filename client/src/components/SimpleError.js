import React from 'react'
import styled from 'styled-components';

import Button from './Button'

const Wrapper = styled.div`
  background-color: #DF1515;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Butt = styled.div`
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

const SimpleError = ({
    errorText,
    buttonText,
    clickHandler
})=> {
    return(
        <Wrapper>
            <div>
                {errorText}
            </div>
            <Butt onClick={clickHandler}>
                {buttonText}
            </Butt>
        </Wrapper>
    )
}

export default SimpleError
