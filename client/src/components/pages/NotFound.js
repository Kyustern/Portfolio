import React from 'react'
import Styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const FourOFourWrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`

const ASCII = Styled.pre`
    font-size: 1.5vw;
    /* font-size: 0.3vw; */
    width: fit-content;
    margin: auto;
`

const ErrorMessage = Styled.div`
    margin: auto;
    margin-top: 3rem;
    font-size: 110%;
    width: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
`

// eslint-disable-next-line
const text = String.raw`
____________/\\\________/\\\\\\\\______________/\\\____        
 __________/\\\\\______/\\\/////\\\___________/\\\\\____       
  ________/\\\/\\\_____/\\\____\//\\\________/\\\/\\\____      
   ______/\\\/\/\\\____\/\\\_____\/\\\______/\\\/\/\\\____     
    ____/\\\/__\/\\\____\/\\\_____\/\\\____/\\\/__\/\\\____    
     __/\\\\\\\\\\\\\\\\_\/\\\_____\/\\\__/\\\\\\\\\\\\\\\\_   
      _\///////////\\\//__\//\\\____/\\\__\///////////\\\//__  
       ___________\/\\\_____\///\\\\\\\/_____________\/\\\____ 
        ___________\///________\///////_______________\///_____
`

// const Fuck = Styled.div`
//     font-size: 400%;
//     margin: auto;
//     margin-top: 3rem;
// `

const NotFound = () => {

    // const url = useLocation()

    return (
        <FourOFourWrapper>

            <ASCII>
                {text}
            </ASCII>

            <ErrorMessage>
                Désolé, mais il semblerait que la page demandée ( {useLocation().pathname} ) n'existe pas. Arrêtez d'écrire des truc au pif dans l'url svp.
            </ErrorMessage>

            {/* <Fuck>
                🖕
            </Fuck> */}

        </FourOFourWrapper>
    )
}

export default NotFound