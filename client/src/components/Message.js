import React from 'react'
import Styled from 'styled-components'

import Button from './Button'

const Inner = Styled.div`
    background-color: #df1515;
    margin: auto;
    font-size: 150%;
`

const Message = ({ object, top, ClickProp, bckgColor }) => {
    const Inner = Styled.div`
    background-color: ${bckgColor};
    margin: auto;
    font-size: 150%;
    `

    const Wrapper = Styled.div`
    position: absolute;
    background-color: #161616;
    top: ${top};
    width: auto;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    z-index: 998;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.53,.2,1,.69);
`

    const H3 = Styled.h3`
    padding-left: 20px;
    padding-right: 20px;
    `

    return (
            <Wrapper>
                <Inner>
                    <H3>Veuillez corriger ou compléter les champs suivants:</H3>
                    <ul>
                        {Object.values(object).map((element, index) => {
                            if (element) {
                                return (<li key={index}>{element}</li>)
                            }
                            return null
                        })}
                    </ul>
                    <Button onClick={ClickProp}>[X]</Button>
                </Inner>
            </Wrapper>
    )
}

export default Message