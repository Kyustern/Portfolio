import React, { createContext, useState, useEffect } from 'react'


export const AuthContext = createContext({
    isSigned: false
})

export const AuthProvider = (props) => {

        //Initialize gapi
        useEffect(() => {
        window.gapi.load('auth2', () => {
            const gAuth = window.gapi.auth2.init({
                client_id: '551489186598-rmfe37oll4t26chafj24j0q9omlgttd2.apps.googleusercontent.com'
            })
    
            gAuth
            .then(() => {
                console.log('Success');
                setAuthInstance(window.gapi.auth2.getAuthInstance())
                console.log("AuthProvider -> window.gapi.auth2", window.gapi.auth2)
                console.log("AuthProvider -> window.gapi.auth2.getAuthInstance()", window.gapi.auth2.getAuthInstance())

            }, (err) => {
                console.log('Err');
                console.log(err);
                
            })
        })
    }, [])

    // const logIn = () => {
    //     authInstance.signIn()
    //     .then((usrInstance) => {
    //         console.log("logIn -> usrInstance", usrInstance)
    //         setIsSigned(true)
    //     })
    //     .catch((err) => {
    //         console.log('Failed to connect to Google. Error code : ', err);
    //         setErrorsTop('45%')
    //         setErrorCode(err)
    //     })
    // }

    // const logOut = () => {
    //     setIsSigned(false)
    //     authInstance.signOut()
    //     .then(() => {
    //         setIsSigned(false)
    //     })
    // }

    const [isSigned, setIsSigned] = useState(false)
    const [authInstance, setAuthInstance] = useState(null)

    useEffect(() => {
        console.log(isSigned);
        
    })



    return (
        <AuthContext.Provider
            value={{
                isSigned,
                authInstance,
                setIsSigned
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}