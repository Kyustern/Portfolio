import React, { useEffect } from 'react'
import Styled from 'styled-components'
import anime from 'animejs'

const SpinnerWrapper = Styled.div`
    height: 240px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bar = Styled.div`
    background-color: white;
    margin: 1%;
    margin-top: 130px;
    width: 10px;
    height: 10px;
    border-radius: 100px;
`

const Spinner = () => {

    const randomHeight = () => {
        anime({
            targets: '.moving',
            // height: anime.stagger(
            //     [anime.random(20, 140), 10], 
            //     {from: 'center'}
            // ),
            height: () => { return anime.random(10, 120)},
            delay: anime.stagger(100),
            easing: 'easeInOutQuad',
            duration: 400,
            complete: randomHeight
        });
    }

    useEffect(() => {
        randomHeight()
    }, [])

    return (
        <SpinnerWrapper>
            <Bar className='moving'></Bar>
            <Bar className='moving'></Bar>
            <Bar className='moving'></Bar>
        </SpinnerWrapper>
    )
}

export default Spinner