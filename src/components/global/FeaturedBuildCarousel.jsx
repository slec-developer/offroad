import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../assets/css/featured-build-carousel.css"
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Build1 from "./../../assets/images/featured-build/build-1.jpg"
import Build2 from "./../../assets/images/featured-build/build-2.jpg"
import Build3 from "./../../assets/images/featured-build/build-3.jpg"
import Build4 from "./../../assets/images/featured-build/build-4.jpg"
import Build5 from "./../../assets/images/featured-build/build-5.jpg"


function FeaturedBuildCarousel() {
  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="fb-carousel-container"
    >
        {[Build1, Build2, Build3, Build4, Build5].map((img, index) => (
            <SwiperSlide key={index} className="fb-slide">
                <img src={img} className='' alt={`Slide ${index + 1}`} />
               
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default FeaturedBuildCarousel