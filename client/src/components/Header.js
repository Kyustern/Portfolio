import React from 'react'
import Styled from 'styled-components'

import FancyButton from './FancyReactRouterButtonV2'
import SvgButton from './SvgButton'

//SVGS
import SvgInsta from './svgr/Insta'
import SvgFacebook from './svgr/Facebook'
import SvgGithub from './svgr/Github'

import '../css/HeaderStyle.css'

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

const HeaderTitle = Styled.div`
    left: 0;
    color : #ededed;
    text-shadow: 1px 1px 20px white;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 20px;
    height: 100%;
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
                <HeaderTitle className='headerTitle'>
                    <h1 style={{'textAlign': 'center'}}>
                        {'</'}LéonTescher{'>'}
                    </h1>
                    <h4 style={{'textAlign': 'center'}}>
                        Développeur web
                    </h4>
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
                </HeaderTitle>
            <ButtonRack>
                <FancyButton text='Accueil' to='/' exact={true} />
                <FancyButton text='Projets' to='/projets' />
                <FancyButton text='Contact' to='/contact' />
                <FancyButton text='Homework Folder' to='/nsfw' />
            </ButtonRack>

        </Wrapper>

    )
}

export default Header