import { useState } from 'react'

const useFormValidation = (initialState) => {
    //STATE INIT
    const [errorMessage, setErrorMessage] = useState(initialState.first)
    const [first, setFirst] = useState(initialState.first)
    const [last, setLast] = useState(initialState.last)
    const [mail, setMail] = useState(initialState.mail)
    const [message, setMessage] = useState(initialState.message)
    const [errors, setErrors] = useState({
        first: false,
        last: false,
        mail: false,
        message: false
    })
    const mailObject = {
        first: first,
        last: last,
        from: mail,
        text: message
    }

    //Check if the mail address is valid
    //i obviously stole this from the internet
    // eslint-disable-next-line
    const mailRegExObj = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const reset = () => {
        setFirst(initialState.first)
        setLast(initialState.last)
        setMail(initialState.mail)
        setMessage(initialState.message)
    }

    const nameCheck = (input, key) => {
        switch (key) {
            case 'first':
                setFirst(input)
                break;
            case 'last':
                setLast(input)
                break;
            default:
                break;
        }
        if (input.includes(` `) || input === (``)) {
            setErrors(Object.assign(errors, { [key]: true }))
        }
        else {
            setErrors(Object.assign(errors, { [key]: false }))
        }
        console.log('From useFormValidation', errors);
        
    }

    const messageCheck = (input) => {
        setMessage(input)

        !input ? setErrors(Object.assign(errors, {message: true})) : setErrors(Object.assign(errors, {message: false}))
    }

    const mailCheck = (input) => {
        setMail(input)
        if(mailRegExObj.test(input)) {
            setErrors(Object.assign(errors, { mail: false }))
        } else {
            setErrors(Object.assign(errors, { mail: true }))
        }
    }

    const firstBind = {
        value: first,
        onChange: e => { nameCheck(e.target.value, 'first') }
    }
    const lastBind = {
        value: last,
        onChange: e => { nameCheck(e.target.value, 'last') }
    }

    const mailBind = {
        value: mail,
        onChange: e => { mailCheck(e.target.value) }
    }
    const messageBind = {
        value: message,
        onChange: e => { messageCheck(e.target.value) }
    }
    const errorMessageBind = {
        value: errorMessage,
        setErrorMessage: msg => {setErrorMessage(msg)}
    }

    // return binds and errors
    
    return [firstBind, lastBind, mailBind, messageBind, errors, mailObject, errorMessageBind, reset]
}

export default useFormValidation
