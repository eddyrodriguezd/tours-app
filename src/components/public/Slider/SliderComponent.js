import React, { useState } from "react";

import sliderImages from "../../../mock/sliderImages";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper-bundle.css";
import "./SliderComponent.css";


import SwiperCore, {
  FreeMode, Navigation, Thumbs, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

export default function SliderComponent() {
  const styloswiper = { '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }
 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const syleSlider={'backgroundSize': 'cover',' backgroundPosition':'center', 'backgroundRepeat': 'no-repeat'}

  return (<>
    <Swiper autoplay={{
      "delay": 4000,
      "disableOnInteraction": false
    }} style={styloswiper} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
      {sliderImages.map((slide, index) =>
       <SwiperSlide key={index} style={{'background':`url(${slide})`,...syleSlider}}>
          <div className="contendedor" ><p>Loretem verita nemo sapiente odit reprehenderit.<br/>Loretem verita nemo sapiente odit reprehenderit.</p></div> 
      
       </SwiperSlide>)}
  
    </Swiper>
    <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
      {sliderImages.map((slide, index) => <SwiperSlide key={index} > <img src={slide} alt=""  className="img__slider"/>  </SwiperSlide>)}
    </Swiper>
  </>
  )
}