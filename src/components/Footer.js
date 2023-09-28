import React from "react"
import styled from "styled-components"


const Section = styled.section`
min-height: 5vh;
width: 100 vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;

flex-direction: column;
`
const Text = styled.div`

`


const Footer = () => {
    return(
        <Section>
            <Text>Copyright @ CodeBucks- 2023</Text>
        </Section>
    )


}
export default Footer;