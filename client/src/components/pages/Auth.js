import React, { useEffect, useState, useContext } from 'react'

import Styled from 'styled-components'
import Loader from '../ActualSpinner'
import Button from '../Button'
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

    const [errorsTop, setErrorsTop] = useState('-100%')
    const [errorCode, setErrorCode] = useState('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')


    const logIn = () => {
        authInstance.signIn()
        .then((usrInstance) => {
            console.log("logIn -> usrInstance", usrInstance)
            setIsSigned(true)
        })
        .catch((err) => {
            console.log('Failed to connect to Google. Error code : ', err);
            setErrorsTop('45%')
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
                            onClick={() => {
                                logOut()
                            }}
                            fSize='300%'
                        >
                            [Log Out]
                        </Button>
                        :
                        <Button
                            onClick={() => {
                                logIn()
                            }}
                            fSize='300%'
                        >
                            [Log In]
                        </Button>
                    :
                    <Loader></Loader>
            }
            <Message
                bckgColor={'#df1515'}
                message={`Echec de la connection a Google. Code d'erreur : ${errorCode}`}
                object={{}}
                top={errorsTop}
                ClickProp={() => { setErrorsTop('-100%') }}
            />
        </Wrapper>
    )
}

export default Auth