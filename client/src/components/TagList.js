import React, { useState } from 'react'
import styled from 'styled-components';

// import Button from './Button'
import { Input } from './styledComponents/inputs'
import Label from './styledComponents/label'

import Button from './styledComponents/button'
import useInputValidation from '../hooks/useInputValidation'

const SingleTag = ({selectItem, removeItem, tagName, tagLink, index}) => {
    
    return (
        <Tag>
        <TextContainer>
            {index + 1} - {tagName}
        </TextContainer>
        <TextContainer>
            :
        </TextContainer>
        <TextContainer>
            {tagLink}
        </TextContainer>
        <ButtonsContainer>
            <NewButton onClick={() => {selectItem(tagName, tagLink, index)}}>
                ✎
            </NewButton>
            <NewButton onClick={() => {removeItem(index)}}>
                ✗
            </NewButton>
        </ButtonsContainer>

    </Tag>
    )
}

const TagList = ({emptyCheck, tagsArray, setTagsArray}) => {

    const [selectedTag, setSelectedTag] = useState(null)

    const [isNameValid, nameBinding, setName, setIsNameValid] = useInputValidation(emptyCheck, "")
    const [isLinkValid, linkBinding, setLink, setIsLinkValid] = useInputValidation(emptyCheck, "")

    const selectItem = (name, value, index) => {
        setSelectedTag(index)
        setLink(value)
        setName(name)
        setIsLinkValid(true)
        setIsNameValid(true)
    }

    const removeItem = (selectedIndex) => {
        setTagsArray(tagsArray.filter((arrayElement, currentIndex) => currentIndex !== selectedIndex))
    }


    const clearInputs = () => {
        setName("")
        setLink("")
    }
    
    const buttonHandler = () => {
        if (selectedTag !== null) {
        // Modifie un tag
            if (isNameValid && isLinkValid) {
                let temp = [...tagsArray]
                temp[selectedTag] = {name: nameBinding.value, link: linkBinding.value}
                setTagsArray(temp)
                setSelectedTag(null)   
                clearInputs()
            }
        } else {
        // Ajoute un tag
            if (isNameValid && isLinkValid) {
                setTagsArray([...tagsArray, {name: nameBinding.value, link: linkBinding.value}])
                clearInputs()
                setIsLinkValid(false)
                setIsNameValid(false)
            }
        }

    }

    return (
        <Wrapper>
            <LabelContainer>
                <InputLabel>{isNameValid ? '' : 'Le nom ne peut être vide'}</InputLabel>
                <InputLabel>{isLinkValid ? '' : 'Le lien ne peut être vide'}</InputLabel>
            </LabelContainer>
            <Tag>
                    <NewInput type="text" placeholder='Projet:Tag:Nom' {...nameBinding}/>
                <TextContainer>
                    &#11162;
                </TextContainer>
                    <NewInput type="text" placeholder='Projet:Tag:Lien' {...linkBinding} />

                <NewButton onClick={() => {buttonHandler()}}>
                    {selectedTag !== null ? 'Modifier' : 'Ajouter'}
                </NewButton>
            </Tag>
            {
                Object.values(tagsArray).map((tag, index) => {
                    return(
                        <SingleTag
                        key={index}
                        index={index}
                        tagName={tag.name}
                        tagLink={tag.link}
                        selectItem={selectItem}
                        removeItem={removeItem}
                        >
                        </SingleTag>                                         
                    )
                })
            }

        </Wrapper>
    )
}

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    color: black;
    width: 70%;
`

const TextContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

const InputLabel = styled(Label)`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 80%;
    width: 90%;
    text-align: left;

`

const LabelContainer = styled(Tag)`
    grid-template-columns: 3.5fr 4.5fr; 
`

const NewInput = styled(Input)`
    border-bottom: solid #CECECF 3px;
    font-size: inherit;
    width: 90%;
    height: 1.5rem;
`

const NewButton = styled(Button)`
    color: black;
    margin-top: auto;
    margin-bottom: auto;
`

export default TagList