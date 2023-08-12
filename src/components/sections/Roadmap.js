import React, { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import DrawSvg from "../DrawSvg";
import ScrollTrigger from'gsap/ScrollTrigger'
import gsap from'gsap';




const Section = styled.section`
min-height:220vh;
width: 100vw;
background-color:  ${props => props.theme.body};
position:relative;

`
const Title = styled.h1`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display:flex;
justify-content: center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
}

`


const Conntainer = styled.div`
width: 70%;
height:200vh;
background-color: ${props => props.theme.body};
margin:  auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em){
    width: 80%;
}
@media (max-width: 40em){
    width: 97%;
}


`

const SvgContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: black;

`
const Items = styled.ul`
list-style: none;
width:100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
    width: 100%;
}
// background-color: lightblue;

&>*:nth-of-type(2n +1){
    justify-content: start;
    @media (max-width: 48em){
        justify-content: center;
    }

    div{
        border-radius: 50px 0 50px 0;
        text-align:right;
        @media (max-width: 48em){
            border-radius: 0 50px 0 50px ;
            text-align:left;
        p{
            border-radius: 0 40px 0 40px ;
        }
        }
    }
    p{
        border-radius: 40px 0 40px 0;
    }
}
&>*:nth-of-type(2n){
    justify-content: end;
    @media (max-width: 48em){
        justify-content: center;
    }


    div{
        border-radius: 0 50px 0 50px ;
        text-align:left;
        
    
    }
    p{
        border-radius: 0 40px 0 40px ;
    }
}
`
const Item = styled.li`
margin: -1rem auto;
width: 100%;
height:100%;
display: flex;

@media (max-width: 48em){
    margin: 0rem auto;
    justify-content: flex-end !important;
}

`
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em){
    width: 70%;

}

`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position:relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display:block;
font-size: ${props => props.theme.fontxl};
text-transform: capatilize;
color: ${props => props.theme.text};

@media (max-width: 40em){
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
}
`

const Text = styled.span`
display:block;
font-size: ${props => props.theme.fontsm};
text-transform: capatilize;
color: ${props => props.theme.text};

font-weight:400;
margin: 0.5rem 0;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxs};
}


`

const RoadMapItem = ({ title, subtext, addToRef }) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle> {title} </SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}


const Roadmap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    }

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0'
                }, {
                y: '-30%',


                ScrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=200px',
                    end: 'bottom center',
                    scrub: true,
                    // markers: true,
                }
            }
            )
        })
    })
    return (
        <Section id="roadmap">
            <Title>Feet-Map</Title>
            <Conntainer>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem addToRefs={addToRefs} title="Planning And Launching" subtext="The overall vision and goals of the collection are defined to ensure coherence and appeal. For the launch, a strategic approach is taken, selecting the right NFT marketplace and timing to maximize visibility. " />
                    <RoadMapItem addToRefs={addToRefs} title="Token Introduction" subtext="The new token will be introduced exclusively for FEET NFT holders. Owners could claim the token via the staking website and utilize it in various ways, including trading it in the exchange market or holding it for future utility. Weekly burning of the token will be conducted as needed, adding to its value and scarcity." />
                    <RoadMapItem addToRefs={addToRefs} title="Utility" subtext="Feet Holders play a crucial role in shaping the project's direction through DAO Voting. They also enjoy passive income from the Tokens they receive for holding NFTs. Weekly burning of Feet NFTs will be carried out using funds from sales, adding to their value and scarcity. Additionally, Feet Holders gain early access to new collections through airdrops. The Feet Tokens hold significant utilities, with the most prominent one being the power to vote for project implementation and direction through DOA voting, empowering the community to steer the project's future." />
                    <RoadMapItem addToRefs={addToRefs} title="Additional Utility" subtext="Feet holders enjoy exclusive benefits through collaborations with real-world individuals and companies, granting access to vIRL® (Physically Redeemable) NFTs. FEET holders receive a distinct discord role and channel, fostering a tight-knit community and enhancing their overall engagement." />
                    <RoadMapItem addToRefs={addToRefs} title="New Collection" subtext="Following the successful launch of the project, a new collection will be introduced. Stay tuned for more information coming soon." />
                    <RoadMapItem addToRefs={addToRefs} title="Airdrops" subtext="Feet holders will enjoy early access to the upcoming new collection. More information coming soon." />

                </Items>
            </Conntainer>
        </Section>
    )
}

export default Roadmap