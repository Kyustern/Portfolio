import React, { useState } from 'react'
import styled from 'styled-components'

import { Input, MultiLineInput } from './styledComponents/inputs'
import Button from './styledComponents/button'
import useInputValidation from '../hooks/useInputValidation'

import TagList from './TagList'

const emptyRegEx = new RegExp(/^[ \t\r\n]*$/)

const emptyCheck = (input, setCurrentValue, setIsValid) => {
    if (emptyRegEx.test(input)) {
        setIsValid(false)
        console.log('not gud')
    } else {
        setIsValid(true)
    }
    setCurrentValue(input)
}

const ProjectEditor = () => {

    const [nameIsValid, nameBinding] = useInputValidation(emptyCheck, "", false)
    const [descIsValid, descBinding] = useInputValidation(emptyCheck, "", false)
    const [tagsArray, setTagsArray] = useState([
        { name: 'mabite', link: 'aaaaaaaaaaazzzzzzzzz' },
        { name: 'lol', link: 'rrrrrrrrrerere' },
        { name: 'kek', link: 'teataet' },
        { name: 'xdxdxd', link: 'eeeeeeeeeeee' }
    ])

    return (
        <FullscreenWrapper>
            <FormWrapper>
                <InputWrapper>
                    <NewInput type="text" placeholder='Projet:Nom' {...nameBinding} ></NewInput>
                    <NewMultilineInput type="text" placeholder='Projet:Description' {...descBinding} ></NewMultilineInput>
                </InputWrapper>
                <TagsWrapper>
                    Ajouter ou modifier des tags
                </TagsWrapper>
                <TagList
                    emptyCheck={emptyCheck}
                    tagsArray={tagsArray}
                    setTagsArray={setTagsArray}
                />
                <ButtonWrapper>
                    <NewButton>Ajouter &#10003;</NewButton>
                    <NewButton>Annuler ×</NewButton>
                </ButtonWrapper>
            </FormWrapper>

        </FullscreenWrapper>
    )
}

const NewInput = styled(Input)`
    border-bottom: solid #CECECF 3px;

`
const NewMultilineInput = styled(MultiLineInput)`
    border-bottom: solid #CECECF 3px;
`

const NewButton = styled(Button)`
    background-color: #2A2A2A;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-left: 0;
`

const ButtonWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;
    margin-top: 1.5rem;

`;

const TagsWrapper = styled.p`
    width: 70%;
    color: black;
    margin-top: 0px;
`

const FullscreenWrapper = styled.div`
    position: absolute;
		top:0;
		left: 0;
		margin:0;
		padding:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    /* background-color: transparent; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
`

const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 80%;
  background-color: #CECECF;
  border-radius: 2px;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 900px) {
    width: 90%;
  }
`

const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ProjectEditor