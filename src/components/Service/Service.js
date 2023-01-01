import { motion } from 'framer-motion'
import React from 'react'
import DoctorServiceImage from '../../img/doctorService.jpg'
import DoctorServiceImage2 from '../../img/doctorService2.jpg'

const Service = () => {
   return (
      <div className='container mx-auto px-5 lg:px-20 py-32 dark:bg-slate-900'>
         <div className="flex flex-row">
            {/* col-1 */}
            <div className="flex-1 xl:mt-[200px]">
               <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1 }}
                  transition={{
                     delay: 0.5,
                     x: { duration: 1 },
                     default: { ease: "linear" }
                  }}
                  viewport={{ once: true }}

                  className='text-[32px] sm:text-[44px] mb-5 lg:mb-0 lg:text-[54px] fontStyle text-slate-700 dark:text-slate-50'>Services</motion.h2>
               <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1 }}
                  transition={{ ease: "anticipate", duration: 2 }}
                  viewport={{ once: true }}

                  className='text-slate-700 text-lg lg:text-lg dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione.</motion.p>

               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
            </div>
            {/* col-2 */}
            <div className="flex-1 hidden lg:block">
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage2} alt="Photos" />
               </div>
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
            </div>
            {/* col-3 */}
            <div className="flex-1 mt-20 hidden lg:block">
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px]  ' src={DoctorServiceImage} alt="Photos" />
               </div>
               <div className='m-3 rounded-tr-[30px] rounded-bl-[30px]'>
                  <img className='rounded-tr-[30px] rounded-bl-[30px] ' src={DoctorServiceImage2} alt="Photos" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service