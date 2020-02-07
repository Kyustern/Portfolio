import React from 'react'
import Styled from 'styled-components'

import SvgButton from './SvgButton'

import SvgGithub from './svgr/Github'
import SvgNotebook from './svgr/Notebook'

const Img = Styled.img`
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-top: 1rem;
`

const Text = Styled.div`
    overflow-wrap: normal;
    padding-top: 0.75rem;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    color: black;
    font-size: 120%;
`

const Title = Styled.h2`
    overflow-wrap: normal;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    color: black;
`

const Wrapper = Styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #cececf;
`

const ButtonContainer = Styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:100%;
    height: auto;
    margin: auto;
`

const HiddenInfo = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    opacity: 0;

    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    &:hover {
        opacity: 1;
    }
`

const TagsContainer = Styled.div`
    margin-top: 20%;
    width: 100%;
    height: auto;
    font-size: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

//Actual component

const Card = ({ img, text, title, isHosted, tags }) => {

    return (
        <Wrapper>
            <Img src={img} alt="" width="95%"></Img>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <HiddenInfo>
                <ButtonContainer>
                    <SvgButton url="https://github.com/Kyustern/portfolio">
                        <SvgGithub width='125px' height='100%' />
                    </SvgButton>
                    {isHosted ? <SvgButton><SvgNotebook width='120px' height='100%' /></SvgButton> : null}
                </ButtonContainer>
                <TagsContainer>
                        {
                        //renderTags(tags)
                            tags.map(({url, text}) => {
                                return <a href={url} key={text}>{text}</a>
                            })
                        }
                </TagsContainer>
            </HiddenInfo>
        </Wrapper>
    )
}

export default Card