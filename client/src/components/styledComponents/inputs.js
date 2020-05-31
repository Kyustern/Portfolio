import Styled from 'styled-components';

export const Input = Styled.input`
    height: 35px;
    width: 70%;
    font-size: 25px;
    text-align: center;
    font-family: 'VT323', monospace;
    color: white;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: #2a2a2a;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    ${this}:focus {
        border-bottom: solid #1878d6 3px;
        ::placeholder {
            color: transparent;
        }
    }
`

export const MultiLineInput = Styled.textarea`
    /* margin-top: 30px; */
    height: 20rem;
    /* border-radius: 5px; */
    width: 70%;
    font-size: 25px;
    text-align: left;
    font-family: 'VT323', monospace;
    color: white;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: #2a2a2a;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    ${this}:focus {
        border-bottom: solid #1878d6 3px;
        ::placeholder {
            color: transparent;
        }
    }
`