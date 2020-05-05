import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import axios from 'axios'

import Card from '../Card'
import Lol from '../ActualSpinner'
// import data from '../../projectData'

const Wrapper = Styled.div`
    width: 90%;
    /* height: 90%; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    column-gap: 20px;
    row-gap: 20px;
    margin: auto;
    height: 100%;
`

const Projects = () => {

    const [distantData, setDistantData] = useState(null)

    const getData = async () => {
        const response = await axios.get('/api/getProjects')
        console.log(response.data);
        setDistantData(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            {
                distantData ?
                    // Object.values(distantData).map((iteration, index) => {
                    distantData.map((iteration, index) => {
                        console.log("Projects -> iteration", iteration.imgUrl)
                        console.log(index);
                        
                        return (<Card
                            key={index}
                            imgUrl={iteration.imgUrl}
                            img={iteration.image}
                            alt=""
                            width={iteration.width ? iteration.width : "95%"}
                            text={iteration.text}
                            title={iteration.title}
                            isHosted={iteration.isHosted}
                            tags={iteration.tags}
                            repoUrl={iteration.repoUrl}
                            hostingUrl={iteration.hostingUrl}
                        />)
                    })
                    :
                    <Lol></Lol>
            }
        </Wrapper>
    )
}

export default Projects