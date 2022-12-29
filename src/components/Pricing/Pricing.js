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
      <div className='container mx-auto px-20 my-32'>
         <div className='text-center'>
            <h2 className='fontStyle leading-[60px] text-[54px] text-[#0014FF]'>Dentino Clinic</h2>
            <h2 className='fontStyle leading-[60px] text-[54px]'>Pricing Plans</h2>
         </div>
         <div className='grid grid-cols-3 mt-20 w-[80%] mx-auto'>

            <div className=''>

               <Price {...priceInfo} />
            </div>
            <div className=''>

               <WhitePrice {...priceInfo} price='$150' title='Doctor Visits' />
            </div>
            <div className=''>

               <Price {...priceInfo} price='$250' title='Urgent Care' />
            </div>

         </div>
      </div>
   )
}

export default Pricing