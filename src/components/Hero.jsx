"use client";
import React from "react";

import HeroSlider1 from "./HeroSlider1";
import HeroSlider2 from "./HeroSlider2";
import HeroSlider3 from "./HeroSlider3";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles/home1-carousel.css";

// import required modules
import { Navigation, Autoplay, Keyboard, EffectFade } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      keyboard={{
        enabled: true,
      }}
      effect="fade"
      modules={[Autoplay, Navigation, Keyboard, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroSlider1 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlider2 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlider3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
