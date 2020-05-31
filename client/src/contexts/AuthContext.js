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
                    setAuthInstance(window.gapi.auth2.getAuthInstance())
                    if (gAuth.isSignedIn.get()) {
                        setCurrentUser(gAuth.currentUser.get())
                    }

                }, (err) => {
                    console.log('Err');
                    console.log(err);

                })
        })



    }, [])

    const [isSigned, setIsSigned] = useState(false)
    const [authInstance, setAuthInstance] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        console.log(isSigned);
        console.log(currentUser);
    })

    return (
        <AuthContext.Provider
            value={{
                isSigned,
                setIsSigned,
                currentUser,
                setCurrentUser,
                authInstance
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}