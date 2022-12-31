import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Button/Button'
import Price from './Price'
import WhitePrice from './WhitePrice'

const Pricing = () => {

   const priceInfo = {
      title: 'All Pysicians',
      price: '$900',
      year: 'Per Yearly',
      list1: 'Lorem ipsum dolor sit amet.',
      list2: 'Lorem ipsum dolor sit amet.',
      list3: 'Lorem ipsum dolor sit amet.'

   }

   return (
      <div className='container mx-auto px-5 lg:px-20 py-32 bg-slate-100'>
         <div className='text-center'>
            <motion.h2
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "anticipate", delay: 0.1, duration: 1 }}
               className='fontStyle leading-9 lg:leading-[60px] text-[32px] lg:text-[54px] text-[#0014FF]'>Dentino Clinic</motion.h2>
            <motion.h2
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "anticipate", delay: 0.2, duration: 2 }}

               className='fontStyle leading-9 lg:leading-[60px] text-[32px] lg:text-[54px]'>Pricing Plans</motion.h2>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 mt-20 w-full xl:w-[80%] mx-auto'>

            <div className='py-5'>

               <Price {...priceInfo} />
            </div>
            <div className='py-5'>

               <WhitePrice {...priceInfo} price='$150' title='Doctor Visits' />
            </div>
            <div className='py-5'>

               <Price {...priceInfo} price='$250' title='Urgent Care' />
            </div>

         </div>
      </div>
   )
}

export default Pricing