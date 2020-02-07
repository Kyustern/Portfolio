import React, {useEffect} from 'react'
import Styled from 'styled-components'
import anime from 'animejs'

const Wrapper = Styled.div`

`

const Circle = Styled.div`
    background-color: #e1e1e1;
    width: 15px;
    height: 15px;
    border-radius: 100px;
    margin-top: 10px;
    margin-bottom: 5px;

    -webkit-box-shadow:0px 0px 10px 2px #ffffff ;
    -moz-box-shadow:0px 0px 10px 2px #ffffff ;
    box-shadow:0px 0px 10px 2px #ffffff ;
`

const backAndForth = anime({
    targets: '.animation-item',
    translateX: '50rem',
    direction: 'alternate',
    easing: 'linear',
    autoplay: true,
    duration: 500,
})

const Spinner = () => {

    // useEffect(()=>{
    //     backAndForth.play()
    //     return(
    //         () => {
    //             backAndForth.pause()
    //         }
    //     )
    // }, [])

    return (
        <Wrapper>
            <Circle className='animation-item'></Circle>
            <Circle className='animation-item'></Circle>
        </Wrapper>
    )
}

export default Spinner