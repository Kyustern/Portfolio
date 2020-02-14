import React from 'react'
import Styled from 'styled-components'

import Card from '../Card'

import portfolio from '../../assets/portfolio.png'

const Wrapper = Styled.div`
    width: 90%;
    /* height: 90%; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    column-gap: 20px;
    row-gap: 20px;
    margin: auto;
`

const Projects = () => {
    return (
        <Wrapper>
            <Card
                key='1'
                img={portfolio}
                alt=""
                width="95%"
                text="Mon portfolio, qui remplace mon CV au format pdf. Ce projet réponds a l'unique besoin de ne plus avoir a utiliser OpenOffice pour pouvoir modifier une information sur mon Curriculum vitae."
                title="Portfolio"
                isHosted={true}
                tags={[
                    {
                        text:"ReactJS",
                        url:"https://fr.reactjs.org/",
                        key: "1"
                    },
                    {
                        text:"React Router",
                        url:"https://reacttraining.com/react-router/web/guides/philosophy",
                        key: "2"
                    },
                    {
                        text:"NodeJS",
                        url:"https://nodejs.org/en/",
                        key: "3"
                    }
                ]}
            />
            <Card
                key='2'
                img={portfolio}
                alt=""
                width="95%"
                text="Mon portfolio, qui remplace mon CV au formaf. Ce projet réponds a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique b a l'unique besoin de ne plus avoir a utiliser OpenOffice pour pouvoir modifier une information sur mon Curriculum vitæ."
                title="Portfolio"
                isHosted={false}
                tags={[
                    {
                        text:"ReactJS",
                        url:"https://fr.reactjs.org/",
                        key: "1"
                    },
                    {
                        text:"React Router",
                        url:"https://reacttraining.com/react-router/web/guides/philosophy",
                        key: "2"
                    },
                    {
                        text:"NodeJS",
                        url:"https://nodejs.org/en/",
                        key: "3"
                    }
                ]}
            />            
            <Card
                key='3'
                img={portfolio}
                alt=""
                width="95%"
                text="Mon portfolio, qui remplace mon CV au format pdf. Ce projet réponds a l'unique besoin de ne plus avoir a utiliser OpenOffice pour pouvoir modifier une information sur mon Curriculum vitæ."
                title="Portfolio"
                isHosted={true}
                tags={[
                    {
                        text:"ReactJS",
                        url:"https://fr.reactjs.org/",
                        key: "1"
                    },
                    {
                        text:"React Router",
                        url:"https://reacttraining.com/react-router/web/guides/philosophy",
                        key: "2"
                    },
                    {
                        text:"NodeJS",
                        url:"https://nodejs.org/en/",
                        key: "3"
                    }
                ]}
            />

        </Wrapper>
    )
}

export default Projects