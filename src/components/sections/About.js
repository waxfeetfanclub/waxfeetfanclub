import React from "react";
import { ThemeProvider, styled } from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";


import { dark } from "../../styles/Themes";




const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
position: relative;


`
const Container = styled.div`
width: 75%;
margin: 0 auto;
// background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
    width: 85%;
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width:80%;
    }

    @media (max-width: 40em){
        
    
        &>*:last-child{
            width:90%;
        }
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
    min-height: 50vh;
}
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin:0 auto;


@media (max-width: 64em){
    width: 100%;
    text-align: center;
}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};

}
@media (max-width: 30em){

font-size: ${props => props.theme.fontlg};
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontmd};
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};

}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};

}
@media (max-width: 30em){

font-size: ${props => props.theme.fontsm};
}

`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontsm};
width: 80%;
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight:400;



@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};

}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};

}
@media (max-width: 30em){

font-size: ${props => props.theme.fontxs};
}
`

const ButtonContainer = styled.div`
width:80%;
margin:1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64em){
    width: 100%;
    button{
        margin:0 auto;

    }
    }

`




const About = () =>{
      
    return(
        <Section id="about">
            <Container>
                <Box> 
                    <Carousel/>
                </Box>
                <Box>
                    <Title>Welcome To The WAX Feet Fan Club.</Title>
                    <SubText>The WAX Feet Fan Club is a collection of 5555 unique meme NFTs stored on the secure WAX Blockchain and hosted on IPFS. Join now and own hilarious and one-of-a-kind digital collectibles that capture the essence of fun and creativity.</SubText>
                    <SubTextLight> DEFLATIONARY NFTS MECHANISM- The WAX Feet Fan Club implements a deflationary NFT mechanism. Weekly community voting determines whether to burn FEET NFTs from the Secondary using funds generated from secondary royalties and the allocated drop fund. Join our ambitious, growing community with numerous benefits and utilities.</SubTextLight>
                    <ButtonContainer>
                    <ThemeProvider theme={dark}>
                        <a href="https://discord.gg/wDvfvFZRwh" target="blank" rel="opener"><Button text="JOIN OUR DISCORD" /></a> 
                    </ThemeProvider>
                    </ButtonContainer>
                </Box>

            </Container>

        </Section>
    )
}

export default About