import React, { useState, useEffect} from 'react'
import Styled from 'styled-components'

import {Input, MultiLineInput} from '../components/styledComponents/inputs'
import useInputValidation from '../hooks/useInputValidation'

import TagList from './TagList'

const emptyRegEx = new RegExp(/\A\s*\z/)

const cbTest = (input, setCurrentValue, setIsValid) => {
    if (input === 'aaa') {
        console.log('it works');
        setIsValid(true)
    }
    setCurrentValue(input)
}

const ProjectEditor = () => {

    const [tags, setTags] = useState()

    const [nameIsValid, nameBinding] = useInputValidation(emptyRegEx, "", false)

	return (
		<FullscreenWrapper>
			<FormWrapper>
                <InputWrapper>
                    <NewInput type="text" placeholder='Projet:Nom' {...nameBinding} ></NewInput>
                    <NewMultilineInput type="text" placeholder='Projet:Description' {...nameBinding} ></NewMultilineInput>
                </InputWrapper>
                <TagsWrapper>
                    aaa
                </TagsWrapper>
                <TagList>

                </TagList>
			</FormWrapper>
		</FullscreenWrapper>
	)
}

const TagsWrapper = Styled.p`
    width: 90%;
`

const NewInput = Styled(Input)`
    border-bottom: solid #CECECF 3px;

`
const NewMultilineInput = Styled(MultiLineInput)`
    border-bottom: solid #CECECF 3px;

`

const FullscreenWrapper = Styled.div`
    position: absolute;
		top:0;
		left: 0;
		margin:0;
		padding:0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.3); */
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
`

const FormWrapper = Styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 70%;
  background-color: #CECECF;
  border-radius: 2px;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 900px) {
    input {
        /* width: 90% !important; */
    }

    textarea {
        /* width: 90% !important; */
    }

    width: 90%;
    }
`

const InputWrapper = Styled.div`
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