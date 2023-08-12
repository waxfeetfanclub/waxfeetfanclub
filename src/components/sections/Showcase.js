import React, { useRef } from "react";

import { keyframes, styled } from "styled-components";

import img1 from '../../assets/Nfts/1.png'
import img2 from '../../assets/Nfts/24.png'
import img3 from '../../assets/Nfts/25.png'
import img4 from '../../assets/Nfts/22.png'
import img5 from '../../assets/Nfts/5.png'
import img6 from '../../assets/Nfts/21.png'
import img7 from '../../assets/Nfts/7.png'
import img8 from '../../assets/Nfts/8.png'
import img9 from '../../assets/Nfts/28.png'
import img10 from '../../assets/Nfts/11.png'
import img11 from '../../assets/Nfts/12.png'
import img12 from '../../assets/Nfts/13.png'
import img13 from '../../assets/Nfts/14.png'
import img14 from '../../assets/Nfts/15.png'
import img15 from '../../assets/Nfts/16.png'
import img16 from '../../assets/Nfts/17.png'
import img17 from '../../assets/Nfts/18.png'
import img18 from '../../assets/Nfts/19.png'
import img19 from '../../assets/Nfts/20.png'
import img20 from '../../assets/Nfts/30.png'



const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color:  ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow:hidden;

&>*:first-child{
    animation-duration: 20s;
    @media (max-width: 30em){
        animation-duration: 20s;
    }
}
&>*:last-child{
    animation-duration: 15s;
    @media (max-width: 30em){
        animation-duration: 20s;
    }
}
`


const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)};

`


const Row = styled.div`
// background-color: lightblue;
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`
const ImgContainer = styled.div`
width: 15rem;
margin:0 1rem;
background-color: ${props => props.theme.body};
border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
    width: 12rem;
}

@media (max-width: 30em){
    width: 10rem;
}

img{
    width: 100%;
    height: auto;
    border-radius: 20px;
}
`
const Details =styled.div`
display:flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius:20px;
border-bottom-right-radius:20px;

span{
    font-size: ${props => props.theme.fontsm};
    color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight:600;
    line-height: 1.5rem;
}

`

const NftItem = ({ img, passRef  }) => {

    let play = (e) =>{
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (e) =>{
        passRef.current.style.animationPlayState = 'paused';
    }


    return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
        <img src={img} alt="Wax Feet" />
        <Details>
            <div>
                <span>Wax Feet</span><br/>
            </div>
        </Details>
    </ImgContainer>
)
}

const Showcase = () => {

    const Row1Ref = useRef(null);
    const Row2Ref =useRef(null);
    return (
        <Section id="showcase">
            
            <Row direction="none" ref={Row1Ref}>
                <NftItem img={img1}  passRef = {Row1Ref} />
                <NftItem img={img2} passRef = {Row1Ref} />
                <NftItem img={img3} passRef = {Row1Ref} />
                <NftItem img={img4} passRef = {Row1Ref} />
                <NftItem img={img5} passRef = {Row1Ref} />
                <NftItem img={img11}  passRef = {Row1Ref} />
                <NftItem img={img12} passRef = {Row1Ref} />
                <NftItem img={img13} passRef = {Row1Ref} />
                <NftItem img={img14} passRef = {Row1Ref} />
                <NftItem img={img15} passRef = {Row1Ref} />



            </Row>
            <Row direction="reverse" ref={Row2Ref} >
                <NftItem img={img6} passRef = {Row2Ref} />
                <NftItem img={img7} passRef = {Row2Ref} />
                <NftItem img={img8} passRef = {Row2Ref} />
                <NftItem img={img9} passRef = {Row2Ref} />
                <NftItem img={img10} passRef = {Row2Ref} />
                <NftItem img={img16}  passRef = {Row1Ref} />
                <NftItem img={img18} passRef = {Row1Ref} />
                <NftItem img={img17} passRef = {Row1Ref} />
                <NftItem img={img19} passRef = {Row1Ref} />
                <NftItem img={img20} passRef = {Row1Ref} />
            </Row>
        </Section>
    )
}

export default Showcase