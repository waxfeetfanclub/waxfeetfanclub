import React from "react";
import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import logo from '../assets/logo.png'


const rotate = keyframes`
100%{
    transform:rotate(1turn);
}

`
const LogoText = styled.h1`
// font-family: 'Akaya Telivigala', cursive;
// font-size: ${props => props.theme.fontmd};
// color: ${props => props.theme.text}
// transition: all 0.2s ease;

// &:hover{
//     transform: scale(1.1);
// }

img{
    margin-top:1.5rem;
    width: 10%;
    height: 11%;
    animation: ${rotate} 6s infinite reverse;

}

@media (max-width: 64em){
    width: 8%;
    height: 8%;
    animation: ${rotate} 6s infinite reverse;
`

const Logo = () =>{
    return(
        <LogoText>
            <Link tp="/">
                
                <img src={logo} alt="logo" />

                
            </Link>
        </LogoText>
    )
}

export default Logo