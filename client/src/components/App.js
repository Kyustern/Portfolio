import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from '../history'

import Header from './Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

import { AuthProvider } from '../contexts/AuthContext'

const App = () => {
    return (
        <Wrapper>
            <BrowserRouter history={history}>
                <AuthProvider>
                    <Header></Header>
                    <Separator />
                    <Main>
                        <Switch>
                            <Route path="/" exact render={() => <Home />} />
                            <Route path="/projets" render={() => <Projects />} />
                            <Route path="/contact" render={() => <Contact />} />
                            {/* <Route path="/auth" render={() => <Auth />} /> */}
                            <Route path="*" render={() => <NotFound />} />
                        </Switch>
                    </Main>
                </AuthProvider>
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
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
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

    html {
        margin: 0;
        padding: 0;
    }
`
const Separator = Styled.div`

    background-color: #1878d6;

    width: 100%;
    height: 0.2vh;
`

export default App