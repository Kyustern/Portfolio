import React from 'react'
import Styled from 'styled-components'

const Bar = (props) => {

    const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: ${props.progression}% auto;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
    height: 2vh;
    width: 100%;
    width: 85%;
    margin:auto;

    font-size: 115%;
`

    const Bar1 = Styled.div`
    padding: 2px 0 2px 0;
    text-align: start;
    padding-left: 1vw;
    height: 100%;
    background-color: #1878d6;
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 40px 0 0 40px;
    border: 10px hidden #000000;
`

    const Bar2 = Styled.div`
    padding: 2px 0 2px 0;
    padding-left: 1vw;
    color: #1A1A1A;
    height: 100%;
    background-color: white;
    grid-area: 1 / 2 / 2 / 3;
    border-radius: 0 40px 40px 0;
    border: 10px hidden #000000;
`

    const Text = Styled.div`
    margin: auto;    
`

    return (
        <Wrapper>
            <Bar1>
                <Text>
                    {props.text}
                </Text>
            </Bar1>
            <Bar2>
                {props.progression}%
            </Bar2>
        </Wrapper>
    )
}

export default Bar