import React, { useState } from "react";
import styled from 'styled-components'
import Logo from "./Logo";
// import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faDiscord,
    faMedium,
} from "@fortawesome/free-brands-svg-icons";



const Section = styled.section`
width:100vw;
background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width:85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
    display: none;
}

@media (max-width: 64em){
    .desktop1{
        display:none;
    }
    .desktop2{
        display:none;
    }
    .desktop3{
        display:none;
    }
    .mobile{
        display: inline-block;
    }


`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em){
    /* 1024px */
    position: fixed;
    top: ${props => props.theme.navHeight};
    left:0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
    transition:all 0.3s ease;

    flex-direction: column;
    justify-content: center;
    }
    
`
const MenuItems = styled.li`
margin: 0 1.5rem;
color: ${props => props.theme.text};
cursor: pointer;


&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 120%;

}


// @media (max-width: 64em){
// margin: 1rem 0;
// }
// &::after{
//     display: none;
`
const IconList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
font-family: 'Akaya Telivigala', cursive;
color: ${props => props.theme.text}
transition: all 0.1s ease;

&:hover{
    transform: scale(1.5);
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
// 1024px
display: flex;
}

&::after, &::before{
    content: '';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;


}

&::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};

}
&::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};

}

`
const Navigation = () => {

    const [click, setClick] = useState(false);


    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',

        })
        setClick(!click);
    }
    return (
        <Section id="navigation">
            <NavBar>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItems onClick={() => scrollTo('home')}>Home</MenuItems>
                    <MenuItems onClick={() => scrollTo('about')}>About</MenuItems>
                    <MenuItems onClick={() => scrollTo('roadmap')}>RoadMap</MenuItems>
                    <MenuItems onClick={() => scrollTo('showcase')}>Feets</MenuItems>
                    <MenuItems onClick={() => scrollTo('team')}>Team</MenuItems>
                    <MenuItems onClick={() => scrollTo('faq')}>Faq</MenuItems>
                    <MenuItems><a href="https://wax-feet-fan-club.gitbook.io/waxfeetfanclub/" target="blank" rel="opener">WP</a></MenuItems>
                    <MenuItems>
                        <div className="mobile">
                            <IconList>
                                <a href="https://twitter.com/feet_wax" target="blank" rel="opener"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            </IconList>
                            <IconList>
                                <a href="https://discord.gg/wDvfvFZRwh" target="blank" rel="opener"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                            </IconList>
                            <IconList>
                                <a href="https://medium.com/@waxblockchainfeet" target="blank" rel="opener"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
                            </IconList>
                        </div>
                    </MenuItems>
                </Menu>
                <div className="desktop1">
                    <IconList>
                        <a href="https://twitter.com/feet_wax" target="blank" rel="opener"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </IconList>
                </div>
                <div className="desktop2">
                    <IconList>
                        <a href="https://discord.gg/wDvfvFZRwh" target="blank" rel="opener"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                    </IconList>
                </div>

                <div className="desktop3">
                    <IconList>
                        <a href="https://medium.com/@waxblockchainfeet" target="blank" rel="opener"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
                    </IconList>
                </div>
            </NavBar>
        </Section>
    )
}

export default Navigation