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
    width: 12px;
    height: 12px;
    border-radius: 100px;
    opacity: 0.15;
`

    const Spinner = () => {

        const randomHeight = () => {
            const animeInstance = anime({
                targets: '.moving',
                opacity: 1,
                height: () => { return anime.random(25, 100) },
                delay: anime.stagger(100),
                easing: 'easeInOutQuad',
                duration: 400,
                loop: true,
                autoplay: false,
                direction: 'alternate'
            });
            return animeInstance
        }

        useEffect(() => {
            randomHeight().play()
        }, [])

        useEffect(() => {
            randomHeight().pause()
        })

        return (
            <SpinnerWrapper>
                <Bar className='moving'></Bar>
                <Bar className='moving'></Bar>
                <Bar className='moving'></Bar>
            </SpinnerWrapper>
        )
    }

    export default Spinner