import React from "react";
import { styled } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination,Navigation,Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/nobg/1.png'
import img2 from '../assets/Nfts/nobg/10.png'
import img3 from '../assets/Nfts/nobg/3.png'
import img4 from '../assets/Nfts/nobg/5.png'
import img5 from '../assets/Nfts/nobg/6.png'
import img6 from '../assets/Nfts/nobg/8.png'
import img7 from '../assets/Nfts/nobg/4.png'
import img8 from '../assets/Nfts/nobg/11.png'
import img9 from '../assets/Nfts/nobg/9.png'
import img10 from '../assets/Nfts/nobg/12.png'
import img11 from '../assets/Nfts/nobg/13.png'
import img12 from '../assets/Nfts/nobg/2.png'
import img13 from '../assets/Nfts/nobg/7.png'
import img14 from '../assets/Nfts/nobg/15.png'
import img15 from '../assets/Nfts/nobg/14.png'


const Container = styled.div`
width: 30vw;
height:65vh;

//  @media (max-width: 60em){
//    height: 45vh;
// width: 40vw;}

@media (max-width: 64em){
  height: 45vh;
  width: 40vw;
}
@media (max-width: 48em){
  height: 50vh;
  width: 40vw;
}
@media (max-width: 30em){
  height: 35vh;
  width: 60vw;
}

.swiper{
  width: 100%;
  height:100%;
}

.swiper-slide{
  background-color: ${props => props.theme.carouselColor};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;

  
  }
}

.swiper-button-next{
  color: ${props => props.theme.text};
  right:0;
}


`

const Carousel = () =>{
    return(
        <Container>
            <Swiper
          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
          pagination = {{
            type:'fraction',
          }}
          scrollbar={{
            draggable:true
          }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        navigation= {true}
        className="mySwiper">
        <SwiperSlide><img src={img1} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img8} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img9} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img10} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img11} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img12} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img13} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img14} alt="WAX Feet"/></SwiperSlide>
        <SwiperSlide><img src={img15} alt="WAX Feet"/></SwiperSlide>
        
      </Swiper>
        </Container>
    )
}

export default Carousel