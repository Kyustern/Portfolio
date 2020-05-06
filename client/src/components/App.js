import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import NSFW from './pages/Nsfw'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <Wrapper>
            <BrowserRouter>
                <Header></Header>
                <Separator />
                <Main>
                    <Switch>
                        <Route path="/" exact render={() => <Home />} />
                        <Route path="/projets" render={() => <Projects />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route path="*" render={() => <NotFound/> } />
                        {/* <Route path="/nsfw" render={() => <NSFW />} /> */}
                    </Switch>
                </Main>
            </BrowserRouter>
        </Wrapper>

    )
}

const Main = Styled.div`
    width: 95%;
    /* height: 100%; */
    margin: 30px auto 30px auto;

    /* display: flex; */
`

const Wrapper = Styled.div`

    @media screen and (max-device-width: 900px){
    body{
        -webkit-text-size-adjust: none;
    }
    }

/* This wraps the entire application, so its kind of important */

    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0px;
    overflow-x: hidden;

    font-family: 'VT323', monospace;
    color: white;
    background-color: #212121;

    a:visited, a:link {
        color: #1878d6;
    }

    a {

        outline: 0;

        text-decoration: none;

        ${this}: hover {
            color: #CE3B21;
        }
    }

    * :focus {
        outline-color: transparent;
        outline-style: none;
    }
`
const Separator = Styled.div`

    background-color: #1878d6;

    /* -webkit-box-shadow:0px 0px 20px 0px #1878d6 ;
    -moz-box-shadow:0px 0px 20px 0px #1878d6 ;
    box-shadow:0px 0px 20px 0px #1878d6 ; */

    width: 100%;
    height: 0.2vh;
`

export default App