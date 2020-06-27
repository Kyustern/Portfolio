import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0;
    margin-right: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 0.5fr 4fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`

const TextContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`

const Tag = () => {
    return(
        <Wrapper>
            
        </Wrapper>
    )
}

export default Tag