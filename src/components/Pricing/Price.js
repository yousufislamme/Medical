import React from 'react'
import Button from '../Button/Button'


const Price = (props) => {

   const { title, price, year, list1, list2, list3 } = props;

   return (
      <>
         <div className='bg-white shadow-xl py-[60px] text-center rounded-3xl'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className='py-5'>
               <h2 className='text-3xl font-bold'>{price}</h2>
               <p>{year}</p>
            </div>

            <div className='px-10'>
               <p className='text-[16px] py-2'>{list1}</p>
               <hr />
               <p className='text-[16px] py-2'>{list2}</p>
               <hr />
               <p className='text-[16px] py-2'>{list3}</p>

               <div className='mt-5'>
                  <Button paddingStyle='10px 50px' title='Get Now' />
               </div>
            </div>
         </div>
      </>
   )
}

export default Price