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

const Spinner = () => {

    const backAndForth = () => {
        const instance = anime({
            targets: '.animation-item',
            autoplay: false,
            loop: true,
            duration: 1100,
            keyframes: [
                // {translateX: 0, easing: 'easeInSine'},
                // {translateX: 0, easing: 'easeOutSine'}
                {width: 300, easing: 'cubicBezier(.45,0,.69,1.5)'},
                {width: 0, easing: 'easeOutExpo'},
            ]
        })
        return instance
    }

    useEffect(()=>{
        backAndForth().play()
        console.log('Mounted');

        //Returned function will be run on component unmount
        return(
            () => {
                // backAndForth().pause()
                console.log('unMounted');
                
            }
        )
    }, [])

    return (
        <Wrapper>
            <Circle className='animation-item'></Circle>
        </Wrapper>
    )
}

export default Spinner