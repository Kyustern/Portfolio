import React from 'react'
import Styled from 'styled-components'

const SvgContainer = ({ children, height }) => {

    const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    display: inline-block;
    /* background-color: #1A1A1A; */
    /* height: 200px; */
    width: 100%;
    height: ${height};
    white-space: nowrap;
    scrollbar-color: #1878d6 #1a1a1a;
    scrollbar-width: thin;
    grid-area: 2 / 1 / 3 / 3;
    `
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default SvgContainer