import styled from 'styled-components';

const Butt = styled.div`
user-select: none;
width: fit-content;
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;
font-size: iherit;
padding: 4px;
border: none;
color: white;
background-color: transparent;
${this}:hover {
    color: black;
    background-color: white;
    cursor: pointer;
}
`

export default Butt