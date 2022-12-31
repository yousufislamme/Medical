import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Testimonial from "../Testimonial/Testimonial";

export default function MySwiper() {

   return (
      <>
         <div>
            <Swiper
               slidesPerView={3}
               spaceBetween={10}
               autoplay={{ delay: 1000 }}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper "
            >
               <SwiperSlide>
                  <Testimonial />
               </SwiperSlide>
               <SwiperSlide>
                  <Testimonial />
               </SwiperSlide>
               <SwiperSlide>
                  <Testimonial />
               </SwiperSlide>
               <SwiperSlide>
                  <Testimonial />
               </SwiperSlide>
               <SwiperSlide>
                  <Testimonial />
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
}
