import React from "react";
import { styled } from "styled-components";
import Typewriter from 'typewriter-effect';
import Button from "./Button";



const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;


span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1{
    color:blue;
}
.text-2{
    color:orange;
}
.text-3{
    color:red;
}


@media (max-width: 70em){
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em){
    align-self: center;
    text-align: center;
    
}
@media (max-width: 40em){
    width: 90%;
}
`
const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom: 1 rem;
widht: 80%;
align-self: flex-start;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};

    
}
    @media (max-width: 48em){
        align-self: center;
        text-align: center;
        
    }

`

const ButtonContainer = styled.div`
width:80%;
align-self: flex-start;

@media (max-width: 48em){
    align-self: center;
    text-align: center;
    
    button{
        margin: 0 auto;
    }
}
`

const TypeWriterText = () => {
    return (

        <>
            <Title>
                Immortalize the beauty and uniqueness of FEET
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`<span class="text-1">NFTs.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(`<span class="text-2">Not Just your Regular NFTs</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(`<span class="text-2">Express your Inner Feelings with MEME NFTs</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(`<span class="text-3">Within WAX Ecosystem.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .start()

                    }}
                />

            </Title>
            <SubTitle>
                Feet Takeover: The Wax Blockchain Stride! - 30th Sept
            </SubTitle>

            <ButtonContainer>
            <a href="https://nfthive.io/drop/nfthivedrops/5882" target="blank" rel="opener"><Button text="Buy now" link='' /></a>
            </ButtonContainer>

        </>
    )
}

export default TypeWriterText
