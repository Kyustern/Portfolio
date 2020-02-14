import React from 'react'

import Bar from '../Bar'
import SvgContainer from '../SvgContainer'
import SvgButton from '../SvgButton'

import '../../css/Home.css'

import SvgHtml5 from '../svgr/Html5'
import SvgCss3 from '../svgr/Css3'
import SvgJs from '../svgr/Js'
import SvgNode from '../svgr/Node'
import SvgReactnative from '../svgr/Reactnative'
import SvgKali from '../svgr/Kali'

const Home = () => {

    return (
        <div className='Wrapper'>
            <div className='Text'>
                <h2>A propos de moi</h2>
                Je suis Léon Tescher, un développeur web basé a Toulouse. Je suis spécialisé dans la création de sites internet et de <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>.<br></br>
                <br></br>
                Actuellement diplômé d'un BTS, je compte faire du développement web mon métier.
            </div>

            <div className='Text2'>
                <h2>Mes méthodes & savoir-faire</h2>
                Dans le cadre de mes projets j'emploie majoritairement <a href="https://fr.wikipedia.org/wiki/JavaScript">JavaScript</a>, et notamment <a href="https://fr.reactjs.org/">ReactJS</a>.
            </div>

            <SvgContainer className='Image2' height='auto'>
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
            </SvgContainer>

            <div className='Bars'>
                <Bar progression="80" text="HTML5" />
                <Bar progression="70" text="CSS3" />
                <Bar progression="60" text="JavaScript" />
                <Bar progression="70" text="ReactJS" />
                <Bar progression="50" text="NodeJS" />
                <Bar progression="50" text="Unix (Kali Linux)" />
            </div>
        </div>
    )
}

export default Home