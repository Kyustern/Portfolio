import React, { useEffect, useState, useContext } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { Redirect, Route, useHistory } from 'react-router-dom'
import history from '../../history'

import ProjectEditor from '../projectEditor'
import TextButton from '../Button'
import Card from '../Card'
import Loading from '../ActualSpinner'
import RequestFailed from '../SimpleError'
import { AuthContext } from '../../contexts/AuthContext'

const Wrapper = Styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    column-gap: 20px;
    row-gap: 20px;
    margin: auto;
    height: 100%;
`
const AddProjectWrapper = Styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
`

const Projects = () => {

    let history = useHistory()

    const {
        isSigned
    } = useContext(AuthContext)

    const [response, setResponse] = useState(null)

    const getData = async () => {
        const temp = await axios.get('/api/getProjects')
        // console.log(temp);
        console.log("getData -> temp", temp)
        
        setResponse(temp)
    }
    
    const refresh = () => {
        console.log('AAAAAAAAAAAAAAAAuihhhhhhhhhhhhhfjth');
        history.push('/projets/nouveau')
        
    }
    

    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            <RequestFailed
                errorText='aaa'
                buttonText='teeexte du boutoooon'
                clickHandler={() => {refresh()}}
            />
            {
                // response.data ?
                //     response.data.map((iteration, index) => {
                //         return (<Card
                //             key={index}
                //             imgUrl={iteration.imgUrl}
                //             img={iteration.image}
                //             alt=""
                //             width={iteration.width ? iteration.width : "95%"}
                //             text={iteration.text}
                //             title={iteration.title}
                //             isHosted={iteration.isHosted}
                //             tags={iteration.tags}
                //             repoUrl={iteration.repoUrl}
                //             hostingUrl={iteration.hostingUrl}
                //         />)
                //     })
                //     :
                //     <Loading/>
            }
            {
                isSigned && response ?
                    <AddProjectWrapper>
                        <TextButton
                            fSize={'200%'}
                            onClick={() => {
                                history.push('/projets/nouveau')
                            }}
                        >
                            + Ajouter un projet
                        </TextButton>
                    </AddProjectWrapper>
                    :
                    null
            }
            <Route
                path='/projets/(nouveau|editer)'
                render={() => <ProjectEditor/>}
            />
        </Wrapper>
    )
}

export default Projects