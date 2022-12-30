import React from 'react';
import MySwiper from '../Swiper/Swiper';
import Sui from '../../img/sui.png'


const AboutUs = () => {
   return (
      <div>
         <div className="container mx-auto px-5 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row gap-5">
               <div className="flex w-full rounded-tr-[50px]">

                  <div className="w-[400px] h-[500px] bg-[#0014FF] rounded-tr-[50px]">
                     <img className='w-full h-full object-cover' src={Sui} alt="" />
                  </div>

               </div>
               <div className="w-full flex flex-col ">
                  <div>
                     <h2 className='fontStyle text-[44px] lg:text-[54px]'>Our Patient</h2>
                     <h2 className='fontStyle text-[44px] lg:text-[54px] text-[#0014FF]'>About US</h2>
                  </div>
                  <div className='h-20 py-[20px] mb-20 lg:mb-0'>
                     <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure debitis asperiores, itaque a exercitationem maxime, eius voluptas quae expedita sit alias, eos pariatur illum!</p>
                  </div>
                  <div className="h-[400px] mx-auto w-[750px]">
                     <MySwiper />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs