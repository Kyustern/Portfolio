import React from 'react'

import Styled from 'styled-components'

const Foot = Styled.div`
;
    position: relative;
    display: block;
    font-size: 16px;
    /* background-color: #150502; */
    text-align: center;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
`

const Footer = (props) => {
    return (
        <Foot>
            {props.children}
            <p>Made with *insert emoji here* by Léon Tescher</p>
            JavaScript, React and other icons by <a rel="noopener noreferrer" target="_blank" href="https://icons8.com">Icons8</a> and <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>
        </Foot>
    )
}

export default Footer