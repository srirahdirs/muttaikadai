"use client";

import TestimonialCard from "./TestimonialCard";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { testimonialsData } from "../data/data";
import { twMerge } from "tailwind-merge";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();
  const settings = {
    dots: false,

    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const handleButtonClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
      <div className="mt-8 flex items-center gap-[6px] w-fit mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <button
            onClick={(e) => handleButtonClick(index)}
            key={index}
            className={twMerge(
              "h-[10px] transition-all duration-500 hover:w-[45px] hover:bg-gold w-[15px] bg-dark-green rounded-full",
              index === activeSlide && "w-[45px] bg-gold"
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default TestimonialsSlider;
