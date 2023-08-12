import React, { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";

import Accordion from '../Accordion'

import ScrollTrigger from'gsap/ScrollTrigger'
import gsap from'gsap';





const Section = styled.section`
min-height:100vh;
height: auto;
width: 100vw;
background-color:  ${props => props.theme.text};
position:relative;
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.carouseColor};
width: fit-content;

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
}
`
const Container= styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content: center;
@media (max-width: 64em){
    width: 80%;
}

@media (max-width: 48em){
    width: 90%;
    flex-direction: column;


    &>*::last-child{
        &>*::first-child{
            margin-top:0;
        }
    }
}
`
const Box =styled.div`
width: 45%;
@media (max-width: 64em){
    width: 90%;
    align-self = center;
    
}

`


const Faq = () =>{

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() =>{

    let element = ref.current;

    ScrollTrigger.create({
        trigger: element,
        start:'top top',
        end: ' bottom top',
        pin: true,
        pinSpacing: false,
        scrub:true,
        // markers: true

    })
    return() =>{
        // ScrollTrigger.kill();
    };
}, [])

    return(
        <Section ref={ref} id="faq">
            <Title>FAQ</Title>
            <Container>
                <Box>
                <Accordion title="WHAT IS WAX FEET FAN CLUB?">
                Step into the mesmerizing world of non-fungible tokens (NFTs) within the WAX Ecosystem with our groundbreaking PFP project, immortalizing the beauty and uniqueness of FEET - and yes, we've got memes too! As the first project on the WAX Blockchain to implement the DEFLATIONARY NFTS mechanism, we'll buy back NFTs from the secondary market using our funds, including creator fees, and humorously burn them as needed.
                    </Accordion>
                
                
                <Accordion title="WHERE CAN WE BUY THE NFTS?">
                Initially, the NFTs will be available for the public through the PFP Drop provided by NFTHive. After the Drop ends, you can find it on secondary markets like Atomichub, Neftyblocks, NFTHive, ETC. For further queries, join our Discord community.

                </Accordion>
                <Accordion title="HOW WILL YOU MANAGE THE FUND?">
                The generated fund will be divided into two parts: 40% allocated to the Developer, Artist, and Team, while 60% will be used for the project. We plan to generate more funds through research and exploration of various methods, such as staking 60% to earn WAX daily. Suggestions for optimizing fund utilization are welcomed.
                </Accordion>
                </Box>

                <Box>
                <Accordion title="IS THERE ANY WAYS TO EARN MONEY?">
                Exciting news! Holders of FEET NFTs will receive our own Fungible Token, tradable for $WAX on the exchange market, or you can hold it for future use. Stay tuned for upcoming token utility updates. Join our Discord for more information.
                </Accordion>
                
                
                <Accordion title="HOW FEET-DAO WORKS?">
                Through Feet-DAO, token holders will have a democratic voice, actively participating in allocating earnings towards new collections, cutting-edge marketing, and innovative concepts. This community-centric approach reaffirms WFFC's commitment to collective decision-making for the community's benefit.
                </Accordion>
                
                
                <Accordion title="WHAT ABOUT THE NEW COLLECTION?">
                Coming soon, a new collection with exclusive benefits for feet holders, including early access and airdrops. Stay tuned for exciting updates!
                </Accordion>

                <Accordion title="WHO ARE WE?">
                The Feet Fan Club was founded by enthusiastic NFT traders and enthusiasts. Our goal is to cultivate the most robust community on WAX and Ethereum, uniting strong traders. Epic and legendary holders will access a private Discord channel for valuable insights, including calls to buy the dip or mint NFTs, coin airdrops, and more—primarily focusing on ETH and WAX. We're dedicated to assembling a group of smart individuals to collectively share knowledge and achieve success.
                </Accordion>
                </Box>
            </Container>

        </Section>
    )
}

export default Faq