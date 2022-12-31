import React from 'react';
import MySwiper from '../Swiper/Swiper';
import Sui from '../../img/sui.png'
import SwiperForMobile from '../Swiper/SwiperForMobile';
import SwiperForMobileTwo from '../Swiper/SwiperForMobileTwo';
import { motion } from 'framer-motion';


const AboutUs = () => {
   return (
      <div>
         <div className="container mx-auto px-5 lg:px-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-5">
               <div className="flex w-full rounded-tr-[50px]">

                  <div className="w-[400px] h-[500px] bg-[#0014FF] rounded-tr-[50px] hidden lg:block">
                     <img className='w-full h-full object-cover' src={Sui} alt="" />
                  </div>

               </div>
               <div className="w-full flex flex-col ">
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 1, opacity: 1 }}
                     transition={{ ease: "anticipate", duration: 1 }}
                     viewport={{ once: true }}

                  >
                     <h2 className='fontStyle text-[34px] sm:text-[44px] sm:leading-[50px] lg:text-[54px]'>Our Patient</h2>
                     <h2 className='fontStyle text-[34px] sm:text-[44px] sm:leading-[50px] lg:text-[54px] text-[#0014FF]'>About US</h2>
                  </motion.div>
                  <div className='h-20 py-[20px] mb-20 lg:mb-0'>
                     <p className='text-sm sm:pt-5 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure debitis asperiores, itaque a exercitationem maxime, eius voluptas quae expedita sit alias, eos pariatur illum!</p>
                  </div>
                  <div className="h-[400px] mx-auto mt-10 w-[750px] hidden lg:block">
                     <MySwiper />
                  </div>
                  <div className='mb-5 sm:hidden lg:hidden'>
                     <SwiperForMobile />
                  </div>
                  <div className='mb-5 hidden sm:block lg:hidden'>
                     <SwiperForMobileTwo />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs