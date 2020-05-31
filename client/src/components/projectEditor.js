import React from 'react'
import Styled from 'styled-components'

import {Input, MultiLineInput} from '../components/styledComponents/inputs'
import useInputValidation from '../hooks/useInputValidation'

const FullscreenWrapper = Styled.div`
    position: absolute;
		top:0;
		left: 0;
		margin:0;
		padding:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormWrapper = Styled.div`
	margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 50%;
  height: 70%;
  background-color: #CECECF;
  border-radius: 20px;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;
  ${this}:hover {
    border-radius: 5px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
`

const cbTest = (input, setCurrentValue, setIsValid) => {
    if (input === 'aaa') {
        console.log('it works');
        setIsValid(true)
    }
    setCurrentValue(input)
}

const ProjectEditor = () => {

    const [nameIsValid, nameBinding] = useInputValidation(cbTest, "")

	return (
		<FullscreenWrapper>
			<FormWrapper>
                <Input id='first' className='input' type="text" placeholder='Projet:Nom' {...nameBinding} ></Input>
			</FormWrapper>
		</FullscreenWrapper>
	)
}

export default ProjectEditor