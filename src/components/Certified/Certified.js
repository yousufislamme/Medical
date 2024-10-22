import React from 'react'
import DrItem from './DrItem'
import DrImage from '../../img/doctor.jpg'
import { motion } from 'framer-motion'


const Certified = () => {
   return (
      <div className=' dark:bg-slate-900 xl:dark:py-20'>
         <div className='container mx-auto px-5 lg:px-20 '>
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "anticipate", duration: 1 }}

               className="text-center">
               <h2 className='text-[34px] sm:text-[44px] ms:leading-[50px] lg:text-[54px] lg:leading-9 lg:leading-[60px] text-slate-700 fontStyle dark:text-slate-50'>Certified</h2>
               <h2 className='text-[34px] sm:text-[44px] ms:leading-[50px] lg:text-[54px] lg:leading-9 lg:leading-[60px] text-[#0014FF] fontStyle dark:text-yellow-400'>Dentists</h2>
            </motion.div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
               <div>
                  <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
               </div>
               <div>
                  <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
               </div>
               <div>
                  <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
               </div>
               <div>
                  <DrItem img={DrImage} name='Dr. AK Harun' type='Dentist' experience='I have 5 years of experience' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Certified