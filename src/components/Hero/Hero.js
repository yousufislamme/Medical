import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Button/Button'
import '../index.css'
import HeroImage from './../../img/doctor.jpg'



export default function Hero() {

   return (
      <div className='bg-gradient-to-b from-indigo-100'>
         <div className="container px-5 lg:px-20 py-20 mx-auto">
            <div className='flex flex-col-reverse lg:flex-row items-center '>
               <div className="flex-1 mt-5 text-center lg:text-left relative">

                  <div className="w-5 h-5 bg-orange-400 rounded-full animate-aOne absolute"></div>
                  <div className="w-[70px] h-[70px] bg-[#9694FF] backdrop-blur-sm rounded-full animate-bOne absolute top-0 right-0"></div>
                  <div className="w-[30px] h-[30px] bg-[#D0B8A8] backdrop-blur-sm rounded-full animate-cOne absolute bottom-0 left-0"></div>

                  <motion.h2
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 1, opacity: 1 }}
                     transition={{ ease: "anticipate", duration: 1 }}
                     viewport={{ once: true }}

                     className="text-[34px] leading-9 sm:text-[54px] sm:leading-[50px] lg:text-[65px] text-[#0014FF] lg:leading-[65px] fontStyle">Find a doctor & book online</motion.h2>
                  <motion.p
                     initial={{ y: 20 }}
                     whileInView={{ y: 1 }}
                     transition={{ ease: "anticipate", duration: 2 }}
                     viewport={{ once: true }}
                     className='text-slate-600 text-lg py-7 pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, mollitia libero? Quia, mollitia incidunt quas in exercitationem veniam minima quibusdam.</motion.p>
                  <Button title="Make an Appointment" />
                  {/* box */}

                  <div className='mt-20 flex flex-col sm:flex-row lg:flex-row gap-7'>
                     {/* box */}
                     <div className='border-2 rounded-tl-[20px] rounded-br-[20px] drop-shadow-xl mx-5 px-5 py-7 relatives'>
                        <h3 className='text-[18px] lg:text-[22px] font-semibold'>Our Service</h3>
                        <p className='mt-'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <div className='absolute bottom-[]'>
                           <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0014FF] mt-2'>
                              <svg width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clip-path="url(#clip0_8_6)">
                                    <path d="M136.66 124.5L85.3033 73.1438L99.9735 58.4735L166 124.5L99.9735 190.527L85.3033 175.856L136.66 124.5Z" fill="white" />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_8_6">
                                       <rect width="249" height="249" fill="white" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </div>

                        </div>
                     </div>

                     {/* box */}
                     <div className='border-2 rounded-tl-[20px] rounded-br-[20px] drop-shadow-xl mx-5 px-5 py-7 relatives'>
                        <h3 className='text-[18px] lg:text-[22px] font-semibold'>Our Service</h3>
                        <p className='mt-'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <div className='absolute bottom-[]'>
                           <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0014FF] mt-2'>
                              <svg width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clip-path="url(#clip0_8_6)">
                                    <path d="M136.66 124.5L85.3033 73.1438L99.9735 58.4735L166 124.5L99.9735 190.527L85.3033 175.856L136.66 124.5Z" fill="white" />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_8_6">
                                       <rect width="249" height="249" fill="white" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </div>

                        </div>
                     </div>

                  </div>
               </div>


               <div

                  className="flex-1">
                  <div className='bg-[#0014FF] w-[200px] mx-auto h-[270px] lg:w-[400px] lg:h-[500px] rounded-br-[100px] lg:mt-20 ml-20 relative'>
                     <img className="rounded-br-[100px] absolute bottom-5 right-5 animate-heroAnimated" src={HeroImage} alt="Images" />
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}
