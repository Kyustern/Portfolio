import React from 'react'
import Styled from 'styled-components'

import Card from '../Card'
import data from '../../projectData'

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

            {Object.values(data).map((iteration) => {
                return (<Card
                    key='1'
                    img={iteration.image}
                    alt=""
                    width= {iteration.width ? iteration.width : "95%"}
                    text={iteration.text}
                    title={iteration.title}
                    isHosted={iteration.isHosted}
                    tags={iteration.tags}
                    repoUrl={iteration.repoUrl}
                    hostingUrl={iteration.hostingUrl}
                />)
            })
            }
        </Wrapper>
    )
}

export default Projects