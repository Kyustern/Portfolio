import React from 'react'
import Styled, { keyframes } from 'styled-components'

import FancyButton from './FancyReactRouterButtonV2'
import SvgButton from './SvgButton'

//SVGS
import SvgInsta from './svgr/Insta'
import SvgFacebook from './svgr/Facebook'
import SvgGithub from './svgr/Github'

const Wrapper = Styled.div`
    width: 100%;
    height: auto;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#323438+0,000000+100 */
    background: #323438; /* Old browsers */
    background: -moz-linear-gradient(right,  #252629 0%, #000000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(right,  #252629 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to left,  #252629 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#252629', endColorstr='#000000',GradientType=1 ); /* IE6-9 */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`

const TitleRack = Styled.div`
    left: 0;
    color : #ededed;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 20px;
    height: 100%;

    @media (max-width: 900px) {
        width: 100% !important;
    }
`

const lol = keyframes`
  from {
    text-shadow: 0px 0px 0px #7d7d7d;
    /* transform: translate(0px); */
  }

  to {
    text-shadow: 0px 0px 20px white;
  }
`

const MainTitle = Styled.h1`
    text-shadow: 2px 2px 0px #7d7d7d;
    text-align: center;

    animation: ${lol} 5s linear infinite alternate;
`

const SubTitle = Styled.h4`
    text-align: center;
`

const ButtonRack = Styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    right: 0;
    align-items: flex-end;
    justify-content: space-evenly;
    height:80%;
`

const SvgWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    return (
        <Wrapper>
                <TitleRack>
                    <MainTitle>
                        {'</'}LéonTescher{'>'}
                    </MainTitle>
                    <SubTitle className='animeTarget'>
                        Développeur web
                    </SubTitle>
                    <SvgWrapper>
                        <SvgButton url='https://github.com/Kyustern'>
                            <SvgGithub height="100%" width="45px" />
                        </SvgButton>
                        <SvgButton url='https://www.instagram.com/leon_tsc/?hl=fr'>
                            <SvgInsta height="100%" width="45px" />
                        </SvgButton>
                        <SvgButton url='https://www.facebook.com/leon.tescher'>
                            <SvgFacebook height="100%" width="45px" />
                        </SvgButton>
                    </SvgWrapper>
                </TitleRack>
            <ButtonRack>
                <FancyButton text='Accueil' to='/' exact={true} />
                <FancyButton text='Projets' to='/projets' />
                <FancyButton text='Parcour' to='/experiences' />
                <FancyButton text='Contact' to='/contact' />
            </ButtonRack>

        </Wrapper>

    )
}

export default Header