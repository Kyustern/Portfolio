import React from 'react'
import Styled from 'styled-components'

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

// const Fuck = Styled.div`
//     font-size: 400%;
//     margin: auto;
//     margin-top: 3rem;
// `

const NotFound = (props) => {

    console.log(props);
    

    return (
        <FourOFourWrapper>

            <ASCII>

{
//looks ugly cuz i had to escape backslashes, but it works fine
`
$$\\   $$\\        $$$$$$\\        $$\\   $$\\ 
$$ |  $$ |      $$$ __$$\\       $$ |  $$ |
$$ |  $$ |      $$$$\\ $$ |      $$ |  $$ |
$$$$$$$$ |      $$\\$$\\$$ |      $$$$$$$$ |
\\_____$$ |      $$ \\$$$$ |      \\_____$$ |
      $$ |      $$ |\\$$$ |            $$ |
      $$ |      \\$$$$$$  /            $$ |
      \\__|       \\______/             \\__|
`
}
            </ASCII>

            <ErrorMessage>
                Désolé, mais il semblerait que la page demandée ( {window.location.pathname} ) n'existe pas. Arrêtez d'écrire des truc au pif dans l'url svp.
            </ErrorMessage>

            {/* <Fuck>
                🖕
            </Fuck> */}

        </FourOFourWrapper>
    )
}

export default NotFound