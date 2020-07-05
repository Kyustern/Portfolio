import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext({
    // isSigned: null
})


export const AuthProvider = (props) => {

    const [role, setRole] = useState(null)
    const [isSigned, setIsSigned] = useState(null)
    const [authInstance, setAuthInstance] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    //Initialize gapi
    useEffect(() => {
        window.gapi.load('auth2', () => {
            const gAuth = window.gapi.auth2.init({
                client_id: '551489186598-rmfe37oll4t26chafj24j0q9omlgttd2.apps.googleusercontent.com'
            })

            gAuth.currentUser.listen(async (currentUsr) => {
                const role = await axios.post('/api/checkrole', currentUsr.getAuthResponse())
                // setRole(role)
                console.log("AuthProvider -> role", role)
                setCurrentUser(currentUsr)
            })

            gAuth.then(async () => {
                    setAuthInstance(window.gapi.auth2.getAuthInstance())
                    if (gAuth.isSignedIn.get()) {
                        setCurrentUser(gAuth.currentUser.get())
                    }
                    // console.log("AuthProvider -> role", role)
                }, (err) => {
                    console.log('Err');
                    console.log(err);

                })
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isSigned,
                setIsSigned,
                currentUser,
                setCurrentUser,
                authInstance,
                role
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}