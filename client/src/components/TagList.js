import React from 'react'
import styled, { css } from 'styled-components';

import Button from './Button'
import { Input, MultiLineInput } from './styledComponents/inputs'
import useInputVaidation from '../hooks/useInputValidation'

const TagList = () => {

    // const [isNameValid, nameBinding] = useInputVaidation()
    // const [isLinkValid, linkBinding] = useInputVaidation()

    return (
        <Wrapper>

            <Tag>
                <NewInput type="text" placeholder='Projet:Tag:Nom' />
                <TextContainer>
                    :
            </TextContainer>
                <NewInput type="text" placeholder='Projet:Tag:Lien' />

                <Button
                fSize='iherit'
                styling={buttonStyling}
            >
                Ajouter
                </Button>
            </Tag>


            <Tag>
                <TextContainer>
                    NomDuTag
                </TextContainer>
                <TextContainer>
                    :
                </TextContainer>
                <TextContainer>
                    NomDuTag
                </TextContainer>
                <Button
                    fSize='iherit'
                    styling={buttonStyling}
                >
                    éditer
                </Button>
            </Tag>
        </Wrapper>
    )
}

const NewInput = styled(Input)`
    border-bottom: solid #CECECF 3px;
    font-size: inherit;
    width: 90%;
    height: 1.5rem;

`

const Wrapper = styled.div`
    color: black;
    width: 70%;
`

const Tag = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0;
    margin-right: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 3fr 0.5fr 4fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`

const TextContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`

const buttonStyling = css`
    color: red;
    margin-top: auto;
    margin-bottom: auto;
`

export default TagList
