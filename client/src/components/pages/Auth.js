import React, { useState, useContext } from 'react'

import Styled from 'styled-components'
import Loader from '../ActualSpinner'
import Button from '../styledComponents/button'
import { AuthContext } from '../../contexts/AuthContext'
import Message from '../Message'

const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
`

const Auth = () => {

    const {
        isSigned,
        setIsSigned,
        authInstance,
        currentUser,
        setCurrentUser
    } = useContext(AuthContext)

    const [displayErr, setDisplayErr] = useState(false)
    const [errorCode, setErrorCode] = useState('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')


    const logIn = () => {
        authInstance.signIn()
        .then((usrInstance) => {
            console.log("logIn -> usrInstance", usrInstance)
            setIsSigned(true)
        })
        .catch((err) => {
            console.log('Failed to connect to Google. Error code : ', err);
            setDisplayErr(true)
            setErrorCode(err)
        })
        
        setCurrentUser(authInstance.currentUser.get())
    }

    const logOut = () => {
        authInstance.signOut()
        .then(() => {
            setIsSigned(false)
        })
        setCurrentUser(null)

    }


    return (
        <Wrapper>
            {
                authInstance ?

                    isSigned ?

                        <Button
                            style={{fontSize: '300%'}}
                            onClick={() => {
                                logOut()
                            }}
                        >
                            [Log Out]
                        </Button>
                        :
                        <Button
                            style={{fontSize: '300%'}}
                            onClick={() => {
                                logIn()
                            }}
                        >
                            [Log In]
                        </Button>
                    :
                    <Loader></Loader>
            }
            {
                displayErr ?
                <Message
                    message={`Echec de la connection a Google. Code d'erreur : ${errorCode.error}`}
                    object={{}}
                    ClickProp={() => { setDisplayErr(false) }}
                />
                :
                null
            }

        </Wrapper>
    )
}

export default Auth