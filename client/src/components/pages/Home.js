import React from 'react'
import styled from 'styled-components';

import SvgContainer from '../styledComponents/SvgContainer'
import SvgButton from '../SvgButton'

import SvgHtml5 from '../svgr/Html5'
import SvgCss3 from '../svgr/Css3'
import SvgJs from '../svgr/Js'
import SvgNode from '../svgr/Node'
import SvgReactnative from '../svgr/Reactnative'
import SvgKali from '../svgr/Kali'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    grid-template-rows: repeat(2, fit-content);
    grid-row-gap: 1rem;
    grid-column-gap: 2vw;
    height: 100%;

    @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, fit-content);
    grid-column-gap: 0px;

}
`

const About = styled.div`
    word-break: break-word;
    display: inline-block;
    font-size: 170%;
    height: auto;
    padding: 20px;
    grid-area: 1 / 1 / 2 / 2;
    @media (max-width: 900px) {
        grid-area: unset;
    }
`;

const Skills = styled.div`
    padding: 20px;
    display: inline-block;
    font-size: 170%;
    height: auto;
    margin: 0;
    grid-area: 1 / 2 / 2 / 3;
    @media (max-width: 900px) {
        grid-area: unset;
    }
`;

const NewSvgCont = styled(SvgContainer)`

    grid-area: 2 / 1 / 3 / 3;
    @media (max-width: 900px) {
        grid-area: initial;
    }
`

const Home = () => {

    return (
        <Wrapper>
            <About className='Text'>
                <h2>A propos de moi</h2>
                Je suis Léon Tescher, un développeur web basé a Toulouse. Je suis spécialisé dans la création de sites internet et de <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>.
                <br></br>
                <br></br>
                Actuellement diplômé d'un BTS et ayant suivi une licence pro en dévellopement web, je continue d'apprendre de manière autonome a travers différente sources, telles que <a href="https://www.udemy.com/">Udemy</a> ou encore <a href="https://medium.com/">Medium</a>
            </About>

            <Skills className='Text2'>
                <h2>Mes méthodes & savoir-faire</h2>
                Dans le cadre de mes projets j'emploie majoritairement <a href="https://fr.wikipedia.org/wiki/JavaScript">JavaScript</a>, et notamment <a href="https://fr.reactjs.org/">ReactJS</a> pour le front-end.
                <br></br>
                <br></br>
                Pour le côté serveur, j'utilise <a href="https://expressjs.com/fr/">ExpressJS</a>, un framework permettant la création d'API REST avec <a href="https://nodejs.org/en/">NodeJS</a>
            </Skills>

            <NewSvgCont>
                <SvgButton url='https://fr.wikipedia.org/wiki/HTML5'>
                    <SvgHtml5 height="100%" width="180px" />
                </SvgButton>
                <SvgButton url='https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade#CSS3'>
                    <SvgCss3 height="100%" width="180px" />
                </SvgButton>
                <SvgButton url='https://fr.wikipedia.org/wiki/JavaScript'>
                    <SvgJs height="100%" width="180px" />
                </SvgButton>
                <SvgButton url='https://fr.reactjs.org/'>
                    <SvgReactnative height="100%" width="180px" />
                </SvgButton>
                <SvgButton url='https://nodejs.org/en/'>
                    <SvgNode height="100%" width="180px" />
                </SvgButton>
                <SvgButton url='https://www.kali.org/'>
                    <SvgKali height="100%" width="180px" />
                </SvgButton>
            </NewSvgCont>

        </Wrapper>
    )
}

export default Home