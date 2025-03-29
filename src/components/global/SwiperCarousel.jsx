import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../assets/css/swiper-carousel.css"
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image1 from "./../../assets/images/content/services-1.jpg"
import Image2 from "./../../assets/images/content/services-2.jpg"
import Image3 from "./../../assets/images/content/services-3.jpg"
import Image4 from "./../../assets/images/content/services-4.jpg"
import Image5 from "./../../assets/images/content/services-5.jpg"
import Image6 from "./../../assets/images/content/services-6.jpg"
import Image7 from "./../../assets/images/content/services-7.jpg"
import Image8 from "./../../assets/images/content/services-8.jpg"



function SwiperCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="carousel-container"
    >
        {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8].map((img, index) => (
            <SwiperSlide key={index} className="slide">
                <img src={img} className='' alt={`Slide ${index + 1}`} />
            </SwiperSlide>
        ))}
      
    </Swiper>
  )
}

export default SwiperCarousel