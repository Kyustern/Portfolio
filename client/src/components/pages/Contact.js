import React, { useState} from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import anime from 'animejs'

// hooks import
import useFormValidation from '../../hooks/useFormValidation'

//Components
import Message from '../Message'
import ResponseInfo from '../ResponseInfo'

//CSS
import '../../css/Contact.css'


const Wrapper = Styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: auto;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.53,.2,1,.69);
`
const Input = Styled.input`
    height: 35px;
    width: 70%;
    font-size: 25px;
    text-align: center;
    font-family: 'VT323', monospace;
    color: white;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: #2a2a2a;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    ${this}:focus {
        border-bottom: solid #1878d6 3px;
        ::placeholder {
            color: transparent;
        }
    }
`

const MultiLineInput = Styled.textarea`
    /* margin-top: 30px; */
    height: 20rem;
    /* border-radius: 5px; */
    width: 70%;
    font-size: 25px;
    text-align: left;
    font-family: 'VT323', monospace;
    color: white;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: #2a2a2a;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    ${this}:focus {
        border-bottom: solid #1878d6 3px;
        ::placeholder {
            color: transparent;
        }
    }
`

const SendButton = Styled.input`
    user-select: none;
    margin-top: 30px;
    font-size: 170%;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 7px;
    padding-right: 7px;
    border: none;
    border-bottom: solid white 3px;
    background-color: transparent;
    color: white;
    font-family: 'VT323', monospace;
    transition: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    ${this}:hover{
        cursor: pointer;
        text-shadow : 1px 1px 5px white;
        /* box-shadow : 1px 1px 1px white; */
    }
`
const InputLabel = Styled.label`
    height: 1rem;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 100%;
    text-align: center;
    font-family: 'VT323', monospace;
    color: #A82C2C;
    transition-property: color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);
`

const Contact = () => {

    const [errorText, setErrorText] = useState({
        first: '',
        last: '',
        mail: '',
        message: ''
    })

    const [firstBind, lastBind, mailBind, messageBind, errors, mailObject, reset] = useFormValidation({
        first: '',
        last: '',
        mail: '',
        message: '' })

    const [errorsTop, setErrorsTop] = useState('-100%')

    const [serverResponse, setServerResponse] = useState(false)

    const innerEveryFunc = (currentValue) => {
        if (currentValue) {
            return false
        } else {
            return true
        }
    }

    const submitHandler = async (e) => {

        const downUp = anime({
            targets: '.wrapper',
            translateY: 220,
            duration: 700,
            easing: 'easeInQuad',
            autoplay: false,
        })

        e.preventDefault()

        //object.every returns true if every values in the targeted object are true
        if (Object.values(errors).every(innerEveryFunc)) {
            setServerResponse("")
            downUp.play()
            const response = await axios.post('/api/sendMail', mailObject)
            
            setServerResponse(response.data.text)

            if(response.data.success) {
                reset()
            }

            setTimeout(() => {
                downUp.reverse()
                downUp.play()
            }, 5000)

            // response ? onSuccess() : null
        } else {
            setErrorsTop('45%')
            errors.first ? setErrorText(Object.assign(errorText, {first: 'Prénom'})) : setErrorText(Object.assign(errorText, {first: ''}))
            errors.last ? setErrorText(Object.assign(errorText, {last: 'Nom'})) : setErrorText(Object.assign(errorText, {last: ''}))
            errors.mail ? setErrorText(Object.assign(errorText, {mail: 'Adresse Mail'})) : setErrorText(Object.assign(errorText, {mail: ''}))
            errors.message ? setErrorText(Object.assign(errorText, {message: 'Message'})) : setErrorText(Object.assign(errorText, {mail: ''}))
        }
    }

    return (
        <Wrapper>

            <Message
            bckgColor={'#df1515'}
            object={errorText}
            top={errorsTop}
            ClickProp={() => {setErrorsTop('-100%')}}
            ></Message>

            <ResponseInfo class='responseInfo'>{serverResponse}</ResponseInfo>

            <InputLabel>
                {errors.first ? "Ce champ est requis et ne peut contenir d'espace" : " "}
            </InputLabel>

            <Input id='first' className='input' type="text" placeholder='Prénom' {...firstBind} ></Input>

            <InputLabel>
                {errors.last ? "Ce champ est requis et ne peut contenir d'espace" : " "}
            </InputLabel>

            <Input className='input' type="text" placeholder='Nom' {...lastBind} ></Input>

            <InputLabel>
                {errors.mail ? "Veuillez saisir une adresse mail valide" : " "}
            </InputLabel>

            <Input className='input' type="text" placeholder='Adresse Mail' {...mailBind}></Input>

            <InputLabel>
                {errors.message ? "Veuillez saisir un message" : " "}
            </InputLabel>

            <MultiLineInput className='textarea' type="text" rows="10" cols='40' placeholder='Message' {...messageBind}></MultiLineInput>

            <SendButton type='submit' value='Envoyer' onClick={submitHandler}></SendButton>

        </Wrapper>
    )
}

export default Contact