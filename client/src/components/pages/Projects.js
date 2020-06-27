import React, { useEffect, useState, useContext } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { Route, useHistory } from 'react-router-dom'

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
        axios.get('/api/getProjects')
        .then((res) => {
            console.log("getData -> res", res)
            setResponse(res)
        })
        .catch((err) => {
            console.log("getData -> err.response", err.response)
            setResponse(err.response)
        })
        // console.log("getData -> temp", temp)
        // setResponse(temp)
    }

    const refresh = () => {


    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            {
                response ?
                    response.status === 200 ?
                        response.data.map((iteration, index) => {
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
                        <RequestFailed
                            errorText={`La requête vers le serveur a échouée (Code d'erreur ${response.status})`}
                            buttonText={`Réessayer`}
                            clickHandler={() => { refresh() }}
                        />
                    :
                    <Loading />
            }
            {
                response && isSigned ?
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
                render={() => <ProjectEditor />}
            />
        </Wrapper>
    )
}

export default Projects